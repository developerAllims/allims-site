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
    <Section
      bgImage={config?.bgImage}
      style={{ height: 'calc(184px + 80px)', padding: '80px 0' }}
    >
      <SectionContainer>
        <Article style={{ padding: '4.2em 0' }}>
          <Title className="text-[45px] text-white">
            {config?.title || config?.name}
          </Title>
        </Article>
      </SectionContainer>
    </Section>
  )
}
