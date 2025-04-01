import { illustrationCompany } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  Button2,
  Image,
  Paragraph3,
  Title6,
  SectionContainer
} from '../../components'

export const LayoutPlaces = () => {
  return (
    <Section className="bg-white" style={{ height: '548px' }}>
      <SectionContainer>
        <Article style={{ padding: '10% 0' }}>
          <ArticleContainer style={{ padding: '27px 27px 0 0' }}>
            <Image src={illustrationCompany} />
          </ArticleContainer>
        </Article>
        <Article style={{ padding: '10% 0' }}>
          <ArticleContainer style={{ padding: '27px 0 0 27px' }}>
            <Title6 className="text-gray-primary">ALLÌMS</Title6>
            <Paragraph3>
              Atuamos no mercado de desenvolvimento de sistema para o segmento
              laboratorial e também para o segmento agronômico.
            </Paragraph3>
            <Paragraph3>
              Atendemos vários clientes no segmento de laboratórios, nas áreas:
              ambiental, alimentos, solo, química, nutrição humana, nutrição
              animal, farmacêutica, pesquisa e desenvolvimento, entre outros.
            </Paragraph3>
            <Paragraph3>
              Estamos situados em Campinas – SP com sede própria.
            </Paragraph3>
            <Button2>Saiba mais</Button2>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
