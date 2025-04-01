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

export const LayoutDemonstrations = () => {
  return (
    <Section bgImage={backgroundDemonstration} style={{ height: '482px' }}>
      <SectionContainer>
        <Article className="w-full justify-center text-center">
          <ArticleContainer
            className="gap-7"
            style={{
              textShadow: '2px 2px 2px var(--color-gray-tertiary)'
            }}
          >
            <Title2>Solicite uma Demonstração</Title2>
            <Paragraph2 className="text-xl">
              Esta etapa é fundamental para o processo de escolha do sistema
              adequado para sua necessidade. É aqui onde você poderá garantir o
              entendimento completo do sistema e capacidade de resolver seus
              problemas, bem como avaliar o conhecimento técnico da empresa que
              passará ser seu provedor de soluções.”
            </Paragraph2>
            <Paragraph2 className="text-xl">
              Solicite agora mesmo e no fechamento do contrato ganhe até 3
              mensalidades grátis!
            </Paragraph2>
            <Button2>Entre em contato</Button2>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
