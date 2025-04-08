import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  GalleryCheckText,
  Paragraph,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'
import { dataWants } from '../../data'

export const LayoutWants = () => {
  const { title, items, obs1, obs2 } = dataWants
  return (
    <Section className="bg-gray-secondary">
      <SectionContainer>
        <Article className="w-full text-center h-[538px] py-[7%] px-0">
          <ArticleContainer className="gap-14 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-gray-primary">{title}</Title>
              <TitleDivider className="text-orange-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-4 gap-20 items-start">
              {items.map((val, idx) => (
                <GalleryCheckText key={`want-${idx}`}>{val}</GalleryCheckText>
              ))}
            </Gallery>
            <Paragraph className="text-base text-gray-primary">
              {obs1}
              <strong>{obs2}</strong>
            </Paragraph>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
