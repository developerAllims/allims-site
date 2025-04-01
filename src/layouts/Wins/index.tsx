import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  GalleryLampText,
  Accordion,
  AccordionItem,
  List,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'
import { dataWins } from '../../data'

export const LayoutWins = () => {
  const { title, items, groups } = dataWins
  return (
    // <Section
    //   className="bg-orange-primary dark:bg-red-500"
    //   style={{ height: '1007px' }}
    // />
    <Section className="bg-orange-primary" style={{ height: '1007px' }}>
      <SectionContainer>
        <Article
          className="w-full text-center justify-center h-full"
          style={{ padding: '7% 0' }}
        >
          <ArticleContainer className="gap-10">
            <TitleContainer>
              <Title className="text-4xl text-white">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery className="gap-16 grid-cols-3">
              {items.map((val, idx) => (
                <GalleryLampText key={`win-${idx}`}>{val}</GalleryLampText>
              ))}
            </Gallery>
            <Accordion className="pt-10">
              {groups.map(({ name, list }, idxGp) => (
                <AccordionItem key={`win-gp-${idxGp}`} group={name}>
                  <List items={list} />
                </AccordionItem>
              ))}
            </Accordion>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
