import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery4,
  Title3,
  Logo
} from '../../components'

export const LayoutClients = () => {
  return (
    <Section className="bg-white p-10">
      <SectionContainer>
        <Article className="w-full text-center">
          <ArticleContainer className="gap-20">
            <Title3 reverse>Clientes</Title3>
            <Gallery4>
              <Logo client="dsm" />
              <Logo client="cooxupe" />
              <Logo client="cls" />
              <Logo client="cetal" />
            </Gallery4>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
