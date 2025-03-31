import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Title3,
  Paragraph2
} from '../../components'

export const LayoutTestimonials = () => {
  return (
    <Section className="bg-gray-primary p-10">
      <SectionContainer>
        <Article className="w-full text-center">
          <ArticleContainer>
            <Title3 className=" text-white">Depoimentos</Title3>
            <Paragraph2 className="">
              Apresentamos um projeto ousado à ALLÌMS para gerenciamento de
              análises na área de nutrição animal e, com muito profissionalismo
              e empenho, os objetivos foram alçados. A atenção, a vontade de
              fazer acontecer e a estrutura de suporte da ALLÌMS, tem sido
              fatores fundamentais para o sucesso de nossos projetos.
            </Paragraph2>
            <Paragraph2 className="">Aldair de Souza Santos</Paragraph2>
            <Paragraph2 className="">Gerente de serviços na DSM</Paragraph2>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
