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
import { dataSegments } from '../../data'

export const LayoutSegments = () => {
  const { title, items } = dataSegments
  return (
    <Section className="bg-orange-tertiary h-full">
      <SectionContainer>
        <Article className="w-full text-center py-[7%] px-0">
          <ArticleContainer className="gap-14 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
              {items.map(({ icon, name }, idx) => (
                <GalleryPhotoText key={`segment-${idx}`} icon={icon}>
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
