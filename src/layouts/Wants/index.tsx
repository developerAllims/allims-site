import { appConfig } from '../../assets'
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
import { useTranslator } from '../../hooks'

export const LayoutWants = () => {
  const t = useTranslator()
  const { wants } = appConfig
  const { title, items, obs1, obs2 } = wants
  return (
    <Section className="bg-gray-secondary p-[10%] lg:p-0">
      <SectionContainer className="justify-center">
        <Article className="w-full text-center h-[538px] py-[7%] px-0 lg:w-4/5">
          <ArticleContainer className="gap-14 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-gray-primary">{t[title]}</Title>
              <TitleDivider className="text-orange-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
              {t[items].split('\n').map((val = '', idx = 0) => (
                <GalleryCheckText key={`want-${idx}`}>{val}</GalleryCheckText>
              ))}
            </Gallery>
            <Paragraph className="text-base text-gray-primary">
              {t[obs1]}
              <strong>{t[obs2]}</strong>
            </Paragraph>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
