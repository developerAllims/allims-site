import { appConfig } from '../../assets'
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
import { useTranslator } from '../../hooks'

export const LayoutSegments = () => {
  const t = useTranslator()
  const { segments } = appConfig
  const { title, items } = segments

  const icons = [
    'segmentDrinks',
    'segmentSanitation',
    'segmentCosmetics',
    'segmentFarm',
    'segmentEnvironment',
    'segmentMining',
    'segmentNutrition',
    'segmentChemical'
  ]

  return (
    <Section className="bg-orange-tertiary h-full p-[10%] lg:p-0">
      <SectionContainer className="justify-center">
        <Article className="w-full text-center py-[7%] px-0 lg:w-4/5">
          <ArticleContainer className="gap-14 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{t[title]}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-2 lg:grid-cols-4 gap-10 place-items-start">
              {items.map(({ name = '' }, idx = 0) => (
                <GalleryPhotoText key={`segment-${idx}`} icon={icons[idx]}>
                  {t[name]}
                </GalleryPhotoText>
              ))}
            </Gallery>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
