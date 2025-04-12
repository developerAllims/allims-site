/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { z } from 'zod'
import { dataSource, appConfig } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Image,
  FormRow,
  Title,
  Gallery,
  GalleryIconLabelText,
  FormBase,
  ButtonSimple,
  FormContainer,
  FormField
} from '../../components'
import { useCallback } from 'react'
import { replaceTemplate } from '../../utils/lib'
import { useLanguage } from '../../hooks'

interface LayoutMessagesProps {
  isSimple?: boolean
}

export const LayoutMessages = ({ isSimple = true }: LayoutMessagesProps) => {
  const { language } = useLanguage()
  const { messages } = dataSource(language)
  const { title, button, fields, contacts } = messages

  const { messages: cfgMessages } = appConfig
  const { fields: cfgFields, items } = cfgMessages

  const cfg: any = {
    name: { specs: { ...cfgFields.name.specs, title: fields.name } },
    email: { specs: { ...cfgFields.email.specs, title: fields.email } },
    phone: { specs: { ...cfgFields.phone.specs, title: fields.phone } },
    company: { specs: { ...cfgFields.company.specs, title: fields.company } },
    message: { specs: { ...cfgFields.message.specs, title: fields.message } }
  }

  const schema = z.object({
    name: z.string().nonempty(),
    email: z.string().nonempty().email(),
    phone: z.string().nonempty(),
    company: z.string().nonempty(),
    message: z.string().nonempty()
  })

  const onSubmit = useCallback(async (data: any) => {
    try {
      //const { name, email, phone, company, message } = data
      const {
        VITE_MAILER_URL,
        VITE_MAILER_FROM,
        VITE_MAILER_TO,
        VITE_MAILER_SUBJECT,
        VITE_MAILER_TEXT,
        VITE_MAILER_HTML
      } = import.meta.env
      const text = replaceTemplate({
        template: VITE_MAILER_TEXT,
        config: data
      })
      const html = replaceTemplate({
        template: VITE_MAILER_HTML,
        config: data
      })
      const payload = {
        from: VITE_MAILER_FROM,
        to: VITE_MAILER_TO,
        subject: VITE_MAILER_SUBJECT,
        text,
        html
      }
      const resp = await axios.post(VITE_MAILER_URL, payload)
      return { success: true, message: resp?.data?.message || '' }
    } catch (error: any) {
      return { success: false, message: error.message }
    }
  }, [])

  return (
    <Section className="bg-gray-primary h-full py-[2%] px-0 lg:min-h-[630px]">
      <SectionContainer className="flex-col lg:flex-row h-full">
        <Article className={`w-full lg:py-[7%] lg:px-0`}>
          <ArticleContainer className="w-full">
            {isSimple ? (
              <Image
                classContainer="w-full justify-end pl-40 lg:px-15"
                icon={'logoSecondary'}
              />
            ) : (
              <Gallery className="grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 justify-start p-[10%] lg:p-0 place-items-start">
                {items.map(
                  ({ type = '', code = '', link = '', list = [] }, idx = 0) => (
                    <GalleryIconLabelText
                      key={`msg-info-${idx}`}
                      iconType={type}
                      label={contacts[type]}
                      className={`${
                        idx === 2
                          ? 'col-span-1 sm:col-span-2 lg:col-span-1'
                          : ''
                      }`}
                    >
                      {list.map((val, idxLs) => (
                        <p key={`contact-inf-${idxLs}`}>
                          {' '}
                          <a
                            href={link ? link : `${code}:${val}`}
                            target={`${link ? '_blank' : '_self'}`}
                          >
                            {val}
                          </a>
                        </p>
                      ))}
                    </GalleryIconLabelText>
                  )
                )}
              </Gallery>
            )}
          </ArticleContainer>
        </Article>
        <Article className="w-full h-full lg:w-2/3 text-center p-[10%] lg:py-[5%] lg:px-0">
          <ArticleContainer className="w-full h-full">
            <FormContainer className="max-w-[100%] lg:max-w-[50svw]">
              <FormBase resolver={schema} onSubmit={onSubmit}>
                <Title className="text-2xl text-white text-left">{title}</Title>
                <FormField config={cfg.name} />
                <FormRow className="flex-col md:flex-row">
                  <FormField config={cfg.email} />
                  <FormField config={cfg.phone} />
                </FormRow>
                <FormField config={cfg.company} />
                <FormField config={cfg.message} />
                <ButtonSimple
                  type="submit"
                  title={button}
                  className="text-lg bg-orange-primary text-white"
                  classContainer="justify-end"
                />
              </FormBase>
            </FormContainer>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
