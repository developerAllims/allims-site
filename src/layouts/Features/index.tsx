import { appConfig } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  GalleryCheckText,
  ButtonLink,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'
import { useTranslator } from '../../hooks'

export const LayoutFeatures = () => {
  const t = useTranslator()
  const { features } = appConfig
  const { title, items, button } = features
  return (
    <Section className="bg-gray-secondary h-full p-[10%] lg:p-0">
      <SectionContainer className="justify-center">
        <Article className="w-full text-center py-[7%] px-0 lg:w-4/5">
          <ArticleContainer className="gap-10 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-gray-primary">{t[title]}</Title>
              <TitleDivider className="text-orange-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 lg:place-items-start">
              {items.map((val = '', idx = 0) => (
                <GalleryCheckText key={`feature-${idx}`}>
                  {t[val]}
                </GalleryCheckText>
              ))}
            </Gallery>
            <ButtonLink
              to="/modulos"
              title={t[button]}
              className="text-lg bg-orange-primary text-white"
            />
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
