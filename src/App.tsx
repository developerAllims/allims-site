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

// import areaChemical from './assets/area_chemical.png'
// import areaCosmetics from './assets/area_cosmetics.png'
// import areaDrinks from './assets/area_drinks.png'
// import areaEnvironment from './assets/area_environment.png'
// import areaFarm from './assets/area_farm.png'
// import areaMining from './assets/area_mining.png'
// import areaNutrition from './assets/area_nutrition.png'
// import areaSanitation from './assets/area_sanitation.png'
import backgroundCompany from './assets/background_company.png'
// import backgroundDemonstration from './assets/background_demonstration.png'
// import backgroundModules from './assets/background_modules.png'
// import backgroundSystem from './assets/background_system.png'
import backgroundTalk from './assets/background_talk.png'
// import iconAgility from './assets/icon_agility.png'
// import iconCalculation from './assets/icon_calculation.png'
// import iconConnection from './assets/icon_connection.png'
// import iconEquipment from './assets/icon_equipment.png'
// import iconExport from './assets/icon_export.png'
// import iconIso from './assets/icon_iso.png'
// import iconTest from './assets/icon_test.png'
// import iconTraceability from './assets/icon_traceability.png'
// import illustrationCompany from './assets/illustration_company.png'
import illustrationSystem from './assets/illustration_system.png'
import logoCompanyPrimary from './assets/logo_company_primary.png'
// import logoCompanySecondary from './assets/logo_company_secondary.png'

function App() {
  return (
    <>
      <Header>
        <Image className="w-32 max-h-14" src={logoCompanyPrimary} />
        <Menu>
          <MenuItem selected>Home</MenuItem>
          <MenuItem>Sistema ALLÌMS</MenuItem>
          <MenuItem>Módulos</MenuItem>
          <MenuItem>Empresa</MenuItem>
          <MenuItem>Contato</MenuItem>
        </Menu>
      </Header>
      <Main>
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
                  O sistema ALLÌMS vai muito além dos padrões. Conta com
                  recursos exclusivos e de forma modular, atende a diversos
                  tipos e tamanhos de laboratórios: Prestadores de Serviços,
                  Controle de Qualidade e Pesquisa e Desenvolvimento. Saiba como
                  conseguimos automatizar centenas de rotinas em um único
                  sistema. Com o melhor custo benefício do mercado, o sistema
                  ALLIMS tem a forma justa e realista dos custos de
                  licenciamento de uso. Reduza os custos exagerados e conquiste
                  mais recursos.
                </Paragraph2>
                <Button2>Saiba mais</Button2>
              </ArticleContainer>
            </Article>
          </SectionContainer>
        </Section>
        <Section bgImage={backgroundTalk}>
          <SectionContainer>
            <Article className="w-full text-center">
              <ArticleContainer>
                <Title2 className="drop-shadow-lg">Vamos Conversar</Title2>
                <Paragraph2 className="drop-shadow-lg">
                  O sistema ALLÌMS vai muito além dos padrões.
                </Paragraph2>
                <Paragraph2 className="drop-shadow-lg">
                  Conta com recursos exclusivos e de forma modular, atende a
                  diversos tipos e tamanhos de laboratórios: Prestadores de
                  Serviços, Controle de Qualidade e Pesquisa e Desenvolvimento.
                  Saiba como conseguimos automatizar centenas de rotinas em um
                  único sistema.
                </Paragraph2>
                <Paragraph2 className="drop-shadow-lg">
                  Com o melhor custo benefício do mercado, o sistema ALLIMS tem
                  a forma justa e realista dos custos de licenciamento de uso.
                  Reduza os custos exagerados e conquiste mais recursos.
                </Paragraph2>
                <Button2 className="drop-shadow-lg">Entre em contato</Button2>
              </ArticleContainer>
            </Article>
          </SectionContainer>
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
