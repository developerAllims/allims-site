import {
  Article,
  ArticleContainer,
  Button1,
  Button2,
  Footer,
  Header,
  Image,
  Main,
  Menu,
  MenuItem,
  Paragraph1,
  Paragraph2,
  Section,
  SectionContainer,
  Title1,
  Title2
} from './components'

import logoCompanyMain from './assets/logo_company_main.png'
import backgroundMain from './assets/background_main.png'

function App() {
  return (
    <>
      <Header>
        <Image className="w-32 max-h-14" src={logoCompanyMain} />
        <Menu>
          <MenuItem selected>Home</MenuItem>
          <MenuItem>Sistema ALLÌMS</MenuItem>
          <MenuItem>Módulos</MenuItem>
          <MenuItem>Empresa</MenuItem>
          <MenuItem>Contato</MenuItem>
        </Menu>
      </Header>
      <Main>
        <Section bgImage={backgroundMain}>
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
        <Section>
          <Article className="bg-orange-primary">
            <ArticleContainer>
              <Title2>Conceito LIMS</Title2>
              <Paragraph2>
                Sistema informatizado para gerenciamento das rotinas e
                informações laboratoriais.
              </Paragraph2>
              <Paragraph2>
                A partir deste conceito, simples processos como garantir a
                rastreabilidade de uma amostra dentro do laboratório, até
                processos mais complexos como: aquisição de dados dos
                equipamentos, execução de cálculos nos ensaios, comparativos de
                resultados, emissão e envio automático do Relatório de Ensaio
                para os clientes, são funções de um sistema LIMS completo.
              </Paragraph2>
              <Button2>Saiba mais</Button2>
            </ArticleContainer>
          </Article>
          <Article className="bg-orange-secondary">
            <ArticleContainer>
              <Title2>Empresa ALLÌMS</Title2>
              <Paragraph2>
                Atuamos no mercado de desenvolvimento de sistema para
                laboratórios de controle de qualidade, prestadores de serviços e
                pesquisa e desenvolvimento. Atendemos as áreas: ambiental,
                alimentos, solo, química, nutrição humana, animal, entre outros.
              </Paragraph2>
              <Button2>Saiba mais</Button2>
            </ArticleContainer>
          </Article>
        </Section>
        <Section className="bg-gray-primary" style={{ height: '548px' }}>
          <SectionContainer style={{ padding: '120px 0' }}></SectionContainer>
        </Section>
      </Main>
      <Footer className="pb-14">
        <span className="font-semibold">
          Todos os Direitos Reservados @ALLÌMS
        </span>
        <span className="font-semibold">Desenvolvido por ALLÌMS</span>
      </Footer>
    </>
  )
}

export default App
