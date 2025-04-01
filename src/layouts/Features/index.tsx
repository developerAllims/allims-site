import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  GalleryCheckText,
  Button,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'
import { dataFeatures } from '../../data'

export const LayoutFeatures = () => {
  const { title, items, button } = dataFeatures
  return (
    <Section className="bg-gray-secondary" style={{ height: '737px' }}>
      <SectionContainer>
        <Article className="w-full text-center" style={{ padding: '7% 0' }}>
          <ArticleContainer className="gap-10 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-gray-primary">{title}</Title>
              <TitleDivider className="text-orange-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-4 gap-20">
              {items.map((val, idx) => (
                <GalleryCheckText key={`feature-${idx}`}>
                  {val}
                </GalleryCheckText>
              ))}
            </Gallery>
            <Button
              href="/modulos"
              className="text-lg bg-orange-primary text-white"
            >
              {button}
            </Button>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
