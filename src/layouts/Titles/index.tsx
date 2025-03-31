import { backgroundSystem } from '../../assets'
import { Article, Section, SectionContainer, Title2 } from '../../components'

export const LayoutTitles = () => {
  return (
    <Section bgImage={backgroundSystem}>
      <SectionContainer>
        <Article style={{ padding: '4.2em 0' }}>
          <Title2 className="text-[45px]">Sistema</Title2>
        </Article>
      </SectionContainer>
    </Section>
  )
}
