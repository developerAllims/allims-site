import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Title3,
  Paragraph2,
  Paragraph4
} from '../../components'

export const LayoutTestimonials = () => {
  return (
    <Section className="bg-gray-primary p-10" style={{ height: '711px' }}>
      <SectionContainer>
        <Article className="w-full text-center justify-center h-full gap-30">
          <Title3 className=" text-white">Depoimentos</Title3>
          <ArticleContainer className="gap-1">
            <Paragraph2 className="text-lg">
              Apresentamos um projeto ousado à ALLÌMS para gerenciamento de
              análises na área de nutrição animal e, com muito profissionalismo
              e empenho, os objetivos foram alçados. A atenção, a vontade de
              fazer acontecer e a estrutura de suporte da ALLÌMS, tem sido
              fatores fundamentais para o sucesso de nossos projetos.
            </Paragraph2>
            <Paragraph2 className="text-[23px]">
              <strong>Aldair de Souza Santos</strong>
            </Paragraph2>
            <Paragraph4 className="text-lg text-orange-primary">
              Gerente de serviços na DSM
            </Paragraph4>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
