import {
  iconAgility,
  iconEquipment,
  iconFollowUp,
  iconCalculation,
  iconConnection,
  iconTraceability,
  iconIso
} from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  Title3,
  GalleryIconText
} from '../../components'

export const LayoutBenefits = () => {
  return (
    <Section className="bg-white">
      <SectionContainer>
        <Article className="w-full text-center" style={{ padding: '7% 0' }}>
          <ArticleContainer className="gap-10">
            <Title3 reverse>Benefícios do Sistema ALLÍMS</Title3>
            <Gallery>
              <GalleryIconText icon={iconAgility}>
                Segurança e agilidade na consulta dos resultados
              </GalleryIconText>
              <GalleryIconText icon={iconEquipment}>
                Elimina transcrição de dados dos equipamentos
              </GalleryIconText>
              <GalleryIconText icon={iconFollowUp}>
                Acompanhamento da rotina analítica em tempo real
              </GalleryIconText>
              <GalleryIconText icon={iconCalculation}>
                Cálculo dos ensaios parametrizados pelo usuário
              </GalleryIconText>
              <GalleryIconText icon={iconConnection}>
                Conexão segura com outros sistemas CRM, ERP
              </GalleryIconText>
              <GalleryIconText icon={iconTraceability}>
                Rastreabilidade das informações cadastradas
              </GalleryIconText>
              <GalleryIconText icon={iconIso}>
                Tranquilidade no atendimento da ISO 17.025
              </GalleryIconText>
              <GalleryIconText icon={iconConnection}>
                100% dos usuários conectados 100% do tempo
              </GalleryIconText>
            </Gallery>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
