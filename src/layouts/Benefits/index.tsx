import { appConfig } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  GalleryIconText,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'
import { useTranslator } from '../../hooks'

export const LayoutBenefits = () => {
  const t = useTranslator()
  const { benefits } = appConfig
  const { title, items } = benefits

  const icons = [
    'iconAgility',
    'iconEquipment',
    'iconFollowUp',
    'iconCalculation',
    'iconExport',
    'iconTraceability',
    'iconIso',
    'iconConnection'
  ]

  return (
    <Section className="bg-white p-[10%] lg:p-0">
      <SectionContainer className="justify-center">
        <Article className="w-full text-center py-[7%] px-0 h-[895px] lg:w-4/5">
          <ArticleContainer className="gap-16 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{t[title]}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:place-items-start">
              {items.map((val = '', idx = 0) => (
                <GalleryIconText
                  key={`benefit-${idx}`}
                  icon={icons[idx]}
                  className="lg:min-h-[132px]"
                >
                  {t[val]}
                </GalleryIconText>
              ))}
            </Gallery>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
