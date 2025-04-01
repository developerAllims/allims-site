import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery4,
  GalleryCheckText,
  Paragraph3,
  Title3
} from '../../components'

export const LayoutWants = () => {
  return (
    <Section className="bg-gray-secondary">
      <SectionContainer>
        <Article
          className="w-full text-center"
          style={{ padding: '7% 0', height: '538px' }}
        >
          <ArticleContainer className="gap-14 justify-center h-full">
            <Title3>O Que Você Procura?</Title3>
            <Gallery4 className="items-start">
              <GalleryCheckText>
                Implantar um sistema LIMS para substituir registros em papel,
                planilhas, documentos eletrônicos ou outras soluções?
              </GalleryCheckText>
              <GalleryCheckText>
                Substituir seu sistema atual, desenvolvido de forma caseira e
                que não contam mais com o apoio e dedicação inicial?
              </GalleryCheckText>
              <GalleryCheckText>
                Substituir seu sistema LIMS, porque existem lacunas e processos
                não atendidos?
              </GalleryCheckText>
              <GalleryCheckText>
                Substituir seu sistema LIMS, referência no mercado, mas os
                custos de manutenção são exagerados?
              </GalleryCheckText>
            </Gallery4>
            <Paragraph3>
              A ALLÌMS pode ajudar muito na busca da solução ideal:{' '}
              <strong>Custos Reduzidos X Benefícios Elevados.</strong>
            </Paragraph3>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
