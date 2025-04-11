import { useLocation } from 'react-router-dom'
import { Article, Section, SectionContainer, Title } from '../../components'
import { getBasePath } from '../../routes'
import { dataSource } from '../../assets'
import { useLanguage } from '../../hooks'

export const LayoutTitles = () => {
  const location = useLocation()
  const basePath = getBasePath(location.pathname)
  const { language } = useLanguage()
  const { pages } = dataSource(language)
  const page = pages[basePath]
  return (
    <Section bgImage={page.bgImage || ''} className="h-[120px] md:h-[184px]">
      <SectionContainer className="w-full">
        <Article className="py-[4.2em] px-0 justify-center items-center md:items-start w-full">
          <Title className="text-[45px] text-white">
            {page.title || page.name}
          </Title>
        </Article>
      </SectionContainer>
    </Section>
  )
}
