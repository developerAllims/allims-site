import { useLocation } from 'react-router-dom'
import { Article, Section, SectionContainer, Title2 } from '../../components'
import { appRoutes } from '../../routes'

export const LayoutTitles = () => {
  const location = useLocation()
  const config = appRoutes.find(({ path }) => path === location.pathname)
  return (
    <Section
      bgImage={config?.bgImage}
      style={{ height: 'calc(184px + 80px)', padding: '80px 0' }}
    >
      <SectionContainer>
        <Article style={{ padding: '4.2em 0' }}>
          <Title2 className="text-[45px]">
            {config?.title || config?.name}
          </Title2>
        </Article>
      </SectionContainer>
    </Section>
  )
}
