import { images, benefits } from '../../assets'
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

export const LayoutBenefits = () => {
  const { title, items } = benefits
  return (
    <Section className="bg-white p-[10%] lg:p-0">
      <SectionContainer className="justify-center">
        <Article className="w-full text-center py-[7%] px-0 h-[895px] lg:w-4/5">
          <ArticleContainer className="gap-16 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-30 lg:place-items-start">
              {items.map(({ icon = '', legend = '', name = '' }, idx = 0) => (
                <GalleryIconText
                  key={`benefit-${idx}`}
                  icon={images[icon]}
                  legend={legend}
                >
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
