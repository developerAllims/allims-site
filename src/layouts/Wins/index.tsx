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
    <Section className="bg-orange-primary min-h-[1007px]">
      <SectionContainer>
        <Article className="w-full text-center justify-center h-full py-[7%] px-0">
          <ArticleContainer className="gap-10">
            <TitleContainer>
              <Title className="text-4xl text-white">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-16">
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
