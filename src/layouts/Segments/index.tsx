import {
  areaChemical,
  areaCosmetics,
  areaDrinks,
  areaEnvironment,
  areaFarm,
  areaMining,
  areaNutrition,
  areaSanitation
} from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery4,
  Title3,
  GalleryPhotoText
} from '../../components'

export const LayoutSegments = () => {
  return (
    <Section className="bg-orange-tertiary">
      <SectionContainer>
        <Article className="w-full text-center" style={{ padding: '7% 0' }}>
          <ArticleContainer className="gap-10">
            <Title3 reverse>Áreas de Atuação</Title3>
            <Gallery4>
              <GalleryPhotoText icon={areaDrinks}>
                Alimentos e Bebidas
              </GalleryPhotoText>
              <GalleryPhotoText icon={areaSanitation}>
                Saneamento
              </GalleryPhotoText>
              <GalleryPhotoText icon={areaCosmetics}>
                Cosméticos
              </GalleryPhotoText>
              <GalleryPhotoText icon={areaFarm}>Agrícola</GalleryPhotoText>
              <GalleryPhotoText icon={areaEnvironment}>
                Meio Ambiente
              </GalleryPhotoText>
              <GalleryPhotoText icon={areaMining}>
                Mineração e Metalúrgica
              </GalleryPhotoText>
              <GalleryPhotoText icon={areaNutrition}>
                Nutrição Animal
              </GalleryPhotoText>
              <GalleryPhotoText icon={areaChemical}>
                Química e Petroquímica
              </GalleryPhotoText>
            </Gallery4>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
