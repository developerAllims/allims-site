import { appConfig } from '../../assets'
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
import { useTranslator } from '../../hooks'

export const LayoutWins = () => {
  const t = useTranslator()
  const { wins } = appConfig
  const { title, items, groups } = wins
  return (
    <Section className="bg-orange-primary min-h-[1007px] p-[10%] lg:p-0">
      <SectionContainer className="justify-center">
        <Article className="w-full text-center justify-center h-full py-[7%] px-0 lg:w-4/5">
          <ArticleContainer className="gap-10 lg:gap-20">
            <TitleContainer>
              <Title className="text-4xl text-white">{t[title]}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-16">
              {t[items].split('\n').map((val = '', idx = 0) => (
                <GalleryLampText key={`win-${idx}`}>{val}</GalleryLampText>
              ))}
            </Gallery>
            <Accordion className="pt-10">
              {groups.map(({ name = '', list = '' }, idxGp = 0) => (
                <AccordionItem key={`win-gp-${idxGp}`} group={t[name]}>
                  <List items={t[list].split('\n')} />
                </AccordionItem>
              ))}
            </Accordion>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
