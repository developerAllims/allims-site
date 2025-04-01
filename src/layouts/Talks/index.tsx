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
    <Section bgImage={backgroundTalk} style={{ height: '546px' }}>
      <SectionContainer>
        <Article
          className="w-full justify-center text-center"
          style={{ padding: '7% 0' }}
        >
          <ArticleContainer
            className="gap-7 justify-center h-full"
            style={{
              textShadow: '2px 2px 2px var(--color-gray-tertiary)'
            }}
          >
            <Title2>Vamos Conversar</Title2>
            <Paragraph2 className="text-xl">
              O sistema ALLÌMS vai muito além dos padrões.
            </Paragraph2>
            <Paragraph2 className="text-xl">
              Conta com recursos exclusivos e de forma modular, atende a
              diversos tipos e tamanhos de laboratórios: Prestadores de
              Serviços, Controle de Qualidade e Pesquisa e Desenvolvimento.
              Saiba como conseguimos automatizar centenas de rotinas em um único
              sistema.
            </Paragraph2>
            <Paragraph2 className="text-xl">
              Com o melhor custo benefício do mercado, o sistema ALLIMS tem a
              forma justa e realista dos custos de licenciamento de uso. Reduza
              os custos exagerados e conquiste mais recursos.
            </Paragraph2>
            <Button2>Entre em contato</Button2>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
