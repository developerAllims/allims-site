import { backgroundDemonstration } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Button2,
  Paragraph2,
  Title2
} from '../../components'

export const DemonstrationsLayout = () => {
  return (
    <Section bgImage={backgroundDemonstration}>
      <SectionContainer>
        <Article className="w-full text-center">
          <ArticleContainer>
            <Title2 className="">Solicite uma Demonstração</Title2>
            <Paragraph2 className="">
              O sistema ALLÌMS vai muito além dos padrões.
            </Paragraph2>
            <Paragraph2 className="">
              Esta etapa é fundamental para o processo de escolha do sistema
              adequado para sua necessidade. É aqui onde você poderá garantir o
              entendimento completo do sistema e capacidade de resolver seus
              problemas, bem como avaliar o conhecimento técnico da empresa que
              passará ser seu provedor de soluções.”
            </Paragraph2>
            <Paragraph2 className="">
              Solicite agora mesmo e no fechamento do contrato ganhe até 3
              mensalidades grátis!
            </Paragraph2>
            <Button2 className="">Entre em contato</Button2>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
