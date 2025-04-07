/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Title,
  Paragraph,
  Divider,
  ButtonSimple,
  Modal,
  Image,
  ButtonIcon
} from '../../components'
import { dataModules } from '../../data'

export const LayoutModules = () => {
  const { items } = dataModules
  const setPairModules = useCallback(() => {
    const pairs = []
    for (let index = 0; index < items.length; index += 2) {
      const left = items[index]
      const right = items[index + 1]
      const pair = { subItems: [left, right] }
      pairs.push(pair)
    }
    return pairs
  }, [items])
  const pairModules = setPairModules()

  const [open, setOpen] = useState(false)
  const [config, setConfig] = useState({ image: '', lines: [] })

  const modalOpen = useCallback((modal: any) => {
    console.log('oi')
    setConfig(modal)
    setOpen(true)
  }, [])

  const modalClose = useCallback(() => {
    console.log('xau')
    setOpen(false)
  }, [])

  return (
    <>
      <Section className="bg-gray-secondary py-20" style={{ padding: '1%' }}>
        <SectionContainer className="flex-col">
          {pairModules.map(({ subItems = [] }, idx) => (
            <div key={`module-${idx}`}>
              <div className="flex gap-6 h-full">
                {subItems.map(
                  ({ title, description, button, modal }, idxSub) => (
                    <Article
                      key={`module-${idx}-sub-${idxSub}`}
                      className="w-full text-center h-full"
                      style={{ padding: '7% 0' }}
                    >
                      <ArticleContainer className="gap-6 items-start h-full">
                        <Title className="text-3xl text-gray-primary">
                          {title}
                        </Title>
                        <Paragraph className="text-base text-gray-primary text-left">
                          {description}
                        </Paragraph>
                        {/* TODO: refactor */}
                        <ButtonSimple
                          className="text-lg bg-orange-primary text-white"
                          onClick={() => {
                            modalOpen(modal)
                          }}
                        >
                          {button}
                        </ButtonSimple>
                      </ArticleContainer>
                    </Article>
                  )
                )}
              </div>
              {idx + 1 < pairModules.length && <Divider />}
            </div>
          ))}
        </SectionContainer>
      </Section>
      <Modal open={open} onClick={modalClose}>
        <Image src={config.image} className="w-[200px]" />
        <div
          className="flex flex-col gap-6 content-stretch"
          style={{
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}
        >
          {config.lines.map((val: any, idx) =>
            typeof val === 'object' ? (
              val.type === 'a' ? (
                <a
                  key={`module-modal-p-${idx}`}
                  href={val.link}
                  target="_blank"
                  className="text-orange-primary"
                  style={{ textDecoration: 'underline' }}
                >
                  {val.text}
                </a>
              ) : val.type === 'ul' ? (
                <ul style={{ listStyle: 'initial', paddingLeft: '1.5rem' }}>
                  {val.items.map((valLi: string, idxLi: number) => (
                    <li key={`module-modal-p-${idxLi}`}>{valLi}</li>
                  ))}
                </ul>
              ) : (
                ''
              )
            ) : (
              <p key={`module-modal-p-${idx}`}>{val}</p>
            )
          )}
          <ButtonIcon
            icon="CiCircleChevLeft"
            title="Voltar"
            classContainer="justify-start"
          />
        </div>
      </Modal>
    </>
  )
}
