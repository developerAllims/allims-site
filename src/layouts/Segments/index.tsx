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
    <Section className="bg-orange-tertiary" style={{ height: '802px' }}>
      <SectionContainer>
        <Article className="w-full text-center" style={{ padding: '7% 0' }}>
          <ArticleContainer className="gap-14 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-4 gap-20">
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
