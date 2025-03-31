import { backgroundTalk } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  Button2,
  Paragraph2,
  Title2,
  SectionContainer
} from '../../components'

export const LayoutTalks = () => {
  return (
    <Section bgImage={backgroundTalk}>
      <SectionContainer>
        <Article className="w-full text-center">
          <ArticleContainer>
            <Title2 className="">Vamos Conversar</Title2>
            <Paragraph2 className="">
              O sistema ALLÌMS vai muito além dos padrões.
            </Paragraph2>
            <Paragraph2 className="">
              Conta com recursos exclusivos e de forma modular, atende a
              diversos tipos e tamanhos de laboratórios: Prestadores de
              Serviços, Controle de Qualidade e Pesquisa e Desenvolvimento.
              Saiba como conseguimos automatizar centenas de rotinas em um único
              sistema.
            </Paragraph2>
            <Paragraph2 className="">
              Com o melhor custo benefício do mercado, o sistema ALLIMS tem a
              forma justa e realista dos custos de licenciamento de uso. Reduza
              os custos exagerados e conquiste mais recursos.
            </Paragraph2>
            <Button2 className="">Entre em contato</Button2>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
