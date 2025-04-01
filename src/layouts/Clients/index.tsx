import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  Logo,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'
import { dataClients } from '../../data'

export const LayoutClients = () => {
  const { title } = dataClients
  return (
    <Section className="bg-white p-10" style={{ height: '574px' }}>
      <SectionContainer>
        <Article className="w-full text-center">
          <ArticleContainer className="gap-40 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            {/* TODO: refactor */}
            <Gallery className="grid-cols-4 gap-20">
              <Logo client="dsm" />
              <Logo client="cooxupe" />
              <Logo client="cls" />
              <Logo client="cetal" />
            </Gallery>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
