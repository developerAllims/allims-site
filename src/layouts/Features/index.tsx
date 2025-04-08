import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  GalleryCheckText,
  ButtonLink,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'
import { dataFeatures } from '../../data'

export const LayoutFeatures = () => {
  const { title, items, button } = dataFeatures
  return (
    <Section className="bg-gray-secondary h-[737px]">
      <SectionContainer>
        <Article className="w-full text-center py-[7%] px-0">
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
            <ButtonLink
              to="/modulos"
              className="text-lg bg-orange-primary text-white"
            >
              {button}
            </ButtonLink>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
