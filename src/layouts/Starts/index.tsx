import { backgroundStart } from '../../assets'
import {
  Section,
  SectionContainer,
  Article,
  ArticleContainer,
  Title1,
  Paragraph1,
  Button1
} from '../../components'

export const LayoutStarts = () => {
  return (
    <Section bgImage={backgroundStart} style={{ height: '570px' }}>
      <SectionContainer
        className="justify-center h-full"
        style={{ padding: 'calc(120px + 80px) 0' }}
      >
        <Article />
        <Article style={{ padding: '27px 60px' }}>
          <ArticleContainer
            className="justify-center gap-7"
            style={{ height: '274px', width: '377px' }}
          >
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
