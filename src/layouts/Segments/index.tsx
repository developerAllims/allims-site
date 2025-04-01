import {
  segmentChemical,
  segmentCosmetics,
  segmentDrinks,
  segmentEnvironment,
  segmentFarm,
  segmentMining,
  segmentNutrition,
  segmentSanitation
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
    <Section className="bg-orange-tertiary" style={{ height: '802px' }}>
      <SectionContainer>
        <Article className="w-full text-center" style={{ padding: '7% 0' }}>
          <ArticleContainer className="gap-14 justify-center h-full">
            <Title3 reverse>Áreas de Atuação</Title3>
            <Gallery4>
              <GalleryPhotoText icon={segmentDrinks}>
                Alimentos e Bebidas
              </GalleryPhotoText>
              <GalleryPhotoText icon={segmentSanitation}>
                Saneamento
              </GalleryPhotoText>
              <GalleryPhotoText icon={segmentCosmetics}>
                Cosméticos
              </GalleryPhotoText>
              <GalleryPhotoText icon={segmentFarm}>Agrícola</GalleryPhotoText>
              <GalleryPhotoText icon={segmentEnvironment}>
                Meio Ambiente
              </GalleryPhotoText>
              <GalleryPhotoText icon={segmentMining}>
                Mineração e Metalúrgica
              </GalleryPhotoText>
              <GalleryPhotoText icon={segmentNutrition}>
                Nutrição Animal
              </GalleryPhotoText>
              <GalleryPhotoText icon={segmentChemical}>
                Química e Petroquímica
              </GalleryPhotoText>
            </Gallery4>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
