/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react'
import { appConfig } from '../../assets'
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
  ModalContainer
} from '../../components'
import { useTranslator } from '../../hooks'

export const LayoutModules = () => {
  const t = useTranslator()
  const { modules } = appConfig
  const { more, items } = modules

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

  const [config, setConfig] = useState({
    title: '',
    text: ''
  })

  const [open, setOpen] = useState(false)
  const modalOpen = useCallback((modal: any) => {
    setConfig(modal)
    setOpen(true)
  }, [])
  const modalClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <>
      <Section className="bg-gray-secondary p-[10%] lg:py-20 lg:p-[1%]">
        <SectionContainer className="flex-col">
          {pairModules.map(({ subItems = [] }, idx) => (
            <div key={`module-${idx}`}>
              <div className="flex gap-1 lg:gap-6 h-full flex-col lg:flex-row">
                {subItems.map(({ title, description, text }, idxSub) => (
                  <Article
                    key={`module-${idx}-sub-${idxSub}`}
                    className="w-full text-center h-full py-0 lg:py-[7%] px-0"
                  >
                    <ArticleContainer className="gap-6 items-start h-full">
                      <Title className="text-3xl text-gray-primary">
                        {t[title]}
                      </Title>
                      <Paragraph className="text-base text-gray-primary text-left">
                        {t[description]}
                      </Paragraph>
                      <ButtonSimple
                        title={t[more]}
                        className="text-lg bg-orange-primary text-white"
                        onClick={() => {
                          modalOpen({ title, text })
                        }}
                      />
                    </ArticleContainer>
                    {idxSub < 1 && (
                      <Divider classContainer="flex lg:hidden pt-[7%] lg:pt-0" />
                    )}
                  </Article>
                ))}
              </div>
              {idx + 1 < pairModules.length && <Divider />}
            </div>
          ))}
        </SectionContainer>
      </Section>
      <Modal
        open={open}
        modalClose={modalClose}
        title={config.title}
        onClick={modalClose}
      >
        <Image icon={'illustrationModule'} className="w-[200px]" />
        <ModalContainer>
          {(t[config.text] || '').split('\n').map((val: any, idx = 0) => (
            <p key={`module-modal-p-${idx}`}>{val}</p>
          ))}
        </ModalContainer>
      </Modal>
    </>
  )
}
