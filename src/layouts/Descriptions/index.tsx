import { illustrationSystem } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  Button2,
  Image,
  Paragraph2,
  Title2,
  SectionContainer
} from '../../components'

export const LayoutDescriptions = () => {
  return (
    <Section className="bg-gray-primary" style={{ height: '548px' }}>
      <SectionContainer>
        <Article style={{ padding: '10% 0' }}>
          <ArticleContainer style={{ padding: '27px 27px 0 0' }}>
            <Image src={illustrationSystem} />
          </ArticleContainer>
        </Article>
        <Article style={{ padding: '10% 0' }}>
          <ArticleContainer style={{ padding: '27px 0 0 27px' }}>
            <Title2>Sistema ALLÌMS</Title2>
            <Paragraph2>
              O sistema ALLÌMS vai muito além dos padrões. Conta com recursos
              exclusivos e de forma modular, atende a diversos tipos e tamanhos
              de laboratórios: Prestadores de Serviços, Controle de Qualidade e
              Pesquisa e Desenvolvimento. Saiba como conseguimos automatizar
              centenas de rotinas em um único sistema. Com o melhor custo
              benefício do mercado, o sistema ALLIMS tem a forma justa e
              realista dos custos de licenciamento de uso. Reduza os custos
              exagerados e conquiste mais recursos.
            </Paragraph2>
            <Button2>Saiba mais</Button2>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
