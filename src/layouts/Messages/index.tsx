/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
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
import { dataMessages } from '../../data'
import { useCallback } from 'react'
import { replaceTemplate } from '../../utils/lib'

interface LayoutMessagesProps {
  isSimple?: boolean
}

export const LayoutMessages = ({ isSimple = true }: LayoutMessagesProps) => {
  const { icon, title, button, fields, schema, items } = dataMessages
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
    <Section className="bg-gray-primary h-full lg:h-[682px] py-[2%] px-0">
      <SectionContainer className="flex-col lg:flex-row">
        <Article className={`w-full lg:py-[7%] lg:px-0`}>
          <ArticleContainer className="w-full">
            {isSimple ? (
              <Image
                classContainer="w-full justify-end pl-40 lg:px-15"
                src={icon}
              />
            ) : (
              <Gallery className="grid-cols-2 lg:grid-cols-1 gap-10 justify-start">
                {items.map(({ name, type, code, text, link, list }, idx) => (
                  <GalleryIconLabelText
                    key={`msg-info-${idx}`}
                    iconType={type}
                    label={name}
                    className={`${idx === 2 ? 'col-span-2 lg:col-span-1' : ''}`}
                  >
                    {list ? (
                      list.map((val, idxLs) => (
                        <p>
                          {' '}
                          <a
                            key={`contact-inf-${idxLs}`}
                            href={link ? link : `${code}:${val}`}
                            target={`${link ? '_blank' : '_self'}`}
                          >
                            {val}
                          </a>
                        </p>
                      ))
                    ) : (
                      <a href={`${code}:${text}`}>{text}</a>
                    )}
                  </GalleryIconLabelText>
                ))}
              </Gallery>
            )}
          </ArticleContainer>
        </Article>
        <Article className="w-full lg:w-2/3 text-center py-[5%] px-0">
          <ArticleContainer className="w-full">
            <FormContainer className="lg:max-w-[50svw]">
              <FormBase resolver={schema} onSubmit={onSubmit}>
                <Title className="text-2xl text-white text-left">{title}</Title>
                <FormField config={fields.name} />
                <FormRow>
                  <FormField config={fields.email} />
                  <FormField config={fields.phone} />
                </FormRow>
                <FormField config={fields.company} />
                <FormField config={fields.message} />
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
