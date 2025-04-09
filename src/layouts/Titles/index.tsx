import { useLocation } from 'react-router-dom'
import { Article, Section, SectionContainer, Title } from '../../components'
import { appRoutes, getBasePath } from '../../routes'

export const LayoutTitles = () => {
  const location = useLocation()
  const basePath = getBasePath(location.pathname)
  const config = appRoutes.find(
    ({ path, hide = false }) => basePath === path && !hide
  )
  return (
    <Section bgImage={config?.bgImage} className="h-[120px] md:h-[184px]">
      <SectionContainer className="w-full">
        <Article className="py-[4.2em] px-0 justify-center items-center md:items-start w-full">
          <Title className="text-[45px] text-white">
            {config?.title || config?.name}
          </Title>
        </Article>
      </SectionContainer>
    </Section>
  )
}
