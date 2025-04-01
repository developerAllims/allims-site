import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Title3,
  Paragraph3
} from '../../components'

export const LayoutExplanations = () => {
  return (
    <Section className="bg-white p-10">
      <SectionContainer>
        <Article className="w-full text-center" style={{ padding: '7% 0' }}>
          <ArticleContainer>
            <Title3 reverse>Conceito do Sistema LIMS</Title3>
            <Paragraph3 className="text-justify">
              Um sistema LIMS pode ser definido como um conjunto de ferramentas
              de software que operam de forma integrada e que são suportados por
              uma infraestrutura formada por sistemas de gerenciamento de banco
              de dados e sistemas de alta tecnologia. Esse conjunto de
              ferramentas tem por objetivo permitir a gestão eficiente dos
              processos e atividades de laboratórios analíticos, químicos,
              físicos e microbiológicos com o objetivo principal de permitir
              alcançar maior qualidade com menores custos, auxiliando as
              empresas no atendimento aos níveis de produtividade exigidos
              atualmente pelo mercado, além de aumentar a confiabilidade e
              segurança da informação, uma vez que reduzem as possibilidades de
              erros proporcionados por anotações manuais e redundância de
              informações.
            </Paragraph3>
            <Paragraph3 className="text-justify">
              Em uma visão simplista, a principal função de um software LIMS é a
              gestão das amostras que estão sob custódia do laboratório. Este
              controle normalmente é iniciado quando a amostra é recebida no
              laboratório e registrada no LIMS. A dinâmica da definição das
              prioridades dos trabalhos poderá ser realizada pelo coordenador do
              laboratório ou diretamente pelo LIMS.
            </Paragraph3>
            <Paragraph3 className="text-justify">
              Depois de liberada para análise, a amostra ficará disponível aos
              analistas para registro dos dados brutos e no final deste
              processo, o sistema LIMS deverá calcular o resultado final e
              disponibilizar o seu Relatório de Ensaio para que seja impresso ou
              enviado de forma eletrônica para o cliente.
            </Paragraph3>
            <Paragraph3 className="text-justify">
              Diversos outras informações também deverão ser registradas no
              LIMS, à exemplo do ciclo de vida da amostra, registros de
              processos analíticos, equipamentos, vidrarias, soluções,
              rastreabilidades, estatísticas, dentre outras.
            </Paragraph3>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
