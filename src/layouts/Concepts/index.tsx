import {
  Section,
  Article,
  ArticleContainer,
  Button2,
  Paragraph2,
  Title2
} from '../../components'

export const LayoutConcepts = () => {
  return (
    <Section>
      <Article className="bg-orange-primary" style={{ height: '552px' }}>
        <ArticleContainer>
          <Title2>Conceito LIMS</Title2>
          <Paragraph2>
            Sistema informatizado para gerenciamento das rotinas e informações
            laboratoriais.
          </Paragraph2>
          <Paragraph2>
            A partir deste conceito, simples processos como garantir a
            rastreabilidade de uma amostra dentro do laboratório, até processos
            mais complexos como: aquisição de dados dos equipamentos, execução
            de cálculos nos ensaios, comparativos de resultados, emissão e envio
            automático do Relatório de Ensaio para os clientes, são funções de
            um sistema LIMS completo.
          </Paragraph2>
          <Button2>Saiba mais</Button2>
        </ArticleContainer>
      </Article>
      <Article className="bg-orange-secondary" style={{ height: '552px' }}>
        <ArticleContainer>
          <Title2>Empresa ALLÌMS</Title2>
          <Paragraph2>
            Atuamos no mercado de desenvolvimento de sistema para laboratórios
            de controle de qualidade, prestadores de serviços e pesquisa e
            desenvolvimento. Atendemos as áreas: ambiental, alimentos, solo,
            química, nutrição humana, animal, entre outros.
          </Paragraph2>
          <Button2>Saiba mais</Button2>
        </ArticleContainer>
      </Article>
    </Section>
  )
}
