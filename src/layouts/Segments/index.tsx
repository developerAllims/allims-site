import { images, segments } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  GalleryPhotoText,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'

export const LayoutSegments = () => {
  const { title, items } = segments
  return (
    <Section className="bg-orange-tertiary h-full p-[10%] lg:p-0">
      <SectionContainer className="justify-center">
        <Article className="w-full text-center py-[7%] px-0 lg:w-4/5">
          <ArticleContainer className="gap-14 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 place-items-start">
              {items.map(({ icon = '', legend = '', name = '' }, idx = 0) => (
                <GalleryPhotoText
                  key={`segment-${idx}`}
                  icon={images[icon]}
                  legend={legend}
                >
                  {name}
                </GalleryPhotoText>
              ))}
            </Gallery>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
