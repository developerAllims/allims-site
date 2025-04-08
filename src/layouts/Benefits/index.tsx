import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  GalleryIconText,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'
import { dataBenefits } from '../../data'

export const LayoutBenefits = () => {
  const { title, items } = dataBenefits
  return (
    <Section className="bg-white">
      <SectionContainer>
        <Article className="w-full text-center py-[7%] px-0 h-[895px]">
          <ArticleContainer className="gap-16 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-4 gap-30">
              {items.map(({ icon, name }, idx) => (
                <GalleryIconText key={`benefit-${idx}`} icon={icon}>
                  {name}
                </GalleryIconText>
              ))}
            </Gallery>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
