import { backgroundCompany } from '../../assets'
import {
  Section,
  SectionContainer,
  Article,
  ArticleContainer,
  Title1,
  Paragraph1,
  Button1
} from '../../components'

export const CompanyLayout = () => {
  return (
    <Section bgImage={backgroundCompany}>
      <SectionContainer style={{ padding: '120px 0' }}>
        <Article />
        <Article style={{ padding: '27px 60px' }}>
          <ArticleContainer style={{ height: '194px', width: '377px' }}>
            <Title1>ALLÌMS</Title1>
            <Paragraph1>
              O sistema ideal para gerenciamento das informações do seu
              laboratório
            </Paragraph1>
            <Button1>Saiba mais</Button1>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
