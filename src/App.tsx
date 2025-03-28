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
  Title1,
  Title2
} from './components'

import logoAllimsCinza from './assets/logo_allims_cinza.png'
import testeiraAllims from './assets/testeira_allims.png'

function App() {
  return (
    <>
      <Header>
        <Image className="w-32 max-h-14" src={logoAllimsCinza} />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Sistema ALLÌMS</MenuItem>
          <MenuItem>Módulos</MenuItem>
          <MenuItem>Empresa</MenuItem>
          <MenuItem>Contato</MenuItem>
        </Menu>
      </Header>
      <Main>
        <Section myHeight={502} myImage={testeiraAllims}>
          <Article />
          <Article>
            <ArticleContainer myHeight={194} myWidth={330}>
              <Title1>ALLÌMS</Title1>
              <Paragraph1>
                O sistema ideal para gerenciamento das informações do seu
                laboratório
              </Paragraph1>
              <Button1>Saiba mais</Button1>
            </ArticleContainer>
          </Article>
        </Section>
        <Section myHeight={548}>
          <Article myBgColor="orange-primary">
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
          <Article myBgColor="orange-secondary">
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
        <Section myHeight={548} className="bg-gray-primary">
          {/* oi */}
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
