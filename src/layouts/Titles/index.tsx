/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from 'react-router-dom'
import { Article, Section, SectionContainer, Title } from '../../components'
import { getBasePath } from '../../routes'
import { appConfig } from '../../assets'
import { useTranslator } from '../../hooks'

export const LayoutTitles = () => {
  const location = useLocation()
  const basePath = getBasePath(location.pathname)

  const t = useTranslator()
  const { pages } = appConfig
  const page = pages[basePath]

  const bgImages: any = {
    '/sistema': 'backgroundSystem',
    '/modulos': 'backgroundModules',
    '/empresa': 'backgroundCompany'
  }
  const bgImage = bgImages[basePath]

  const title = basePath === '/empresa' ? 'ALLIMS' : ''

  return (
    <Section bgImage={bgImage} className="h-[120px] md:h-[184px]">
      <SectionContainer className="w-full">
        <Article className="py-[4.2em] px-0 justify-center items-center md:items-start w-full">
          <Title className="text-[45px] text-white">
            {title || t[page.name]}
          </Title>
        </Article>
      </SectionContainer>
    </Section>
  )
}
