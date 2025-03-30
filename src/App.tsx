import {
  Article,
  ArticleContainer,
  Button1,
  Button2,
  Button3,
  Footer,
  Form,
  FormContainer,
  Gallery,
  GalleryCheckText,
  GalleryIconText,
  GalleryPhotoText,
  Header,
  Image,
  Input,
  Logo,
  Main,
  Menu,
  MenuItem,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Section,
  SectionContainer,
  TextArea,
  Title1,
  Title2,
  Title3,
  Title4
} from './components'

import areaChemical from './assets/area_chemical.png'
import areaCosmetics from './assets/area_cosmetics.png'
import areaDrinks from './assets/area_drinks.png'
import areaEnvironment from './assets/area_environment.png'
import areaFarm from './assets/area_farm.png'
import areaMining from './assets/area_mining.png'
import areaNutrition from './assets/area_nutrition.png'
import areaSanitation from './assets/area_sanitation.png'
import backgroundCompany from './assets/background_company.png'
import backgroundDemonstration from './assets/background_demonstration.png'
// import backgroundModules from './assets/background_modules.png'
// import backgroundSystem from './assets/background_system.png'
import backgroundTalk from './assets/background_talk.png'
import iconAgility from './assets/icon_agility.png'
import iconCalculation from './assets/icon_calculation.png'
import iconConnection from './assets/icon_connection.png'
import iconEquipment from './assets/icon_equipment.png'
// import iconExport from './assets/icon_export.png'
import iconIso from './assets/icon_iso.png'
import iconFollowUp from './assets/icon_follow_up.png'
import iconTraceability from './assets/icon_traceability.png'
// import illustrationCompany from './assets/illustration_company.png'
import illustrationSystem from './assets/illustration_system.png'
import logoCompanyPrimary from './assets/logo_company_primary.png'
import logoCompanySecondary from './assets/logo_company_secondary.png'

function App() {
  return (
    <>
      <Header>
        <Image src={logoCompanyPrimary} className="w-32 max-h-14" />
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
          <Article className="bg-orange-primary" style={{ height: '552px' }}>
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
          <Article className="bg-orange-secondary" style={{ height: '552px' }}>
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
                <Title2 className="">Vamos Conversar</Title2>
                <Paragraph2 className="">
                  O sistema ALLÌMS vai muito além dos padrões.
                </Paragraph2>
                <Paragraph2 className="">
                  Conta com recursos exclusivos e de forma modular, atende a
                  diversos tipos e tamanhos de laboratórios: Prestadores de
                  Serviços, Controle de Qualidade e Pesquisa e Desenvolvimento.
                  Saiba como conseguimos automatizar centenas de rotinas em um
                  único sistema.
                </Paragraph2>
                <Paragraph2 className="">
                  Com o melhor custo benefício do mercado, o sistema ALLIMS tem
                  a forma justa e realista dos custos de licenciamento de uso.
                  Reduza os custos exagerados e conquiste mais recursos.
                </Paragraph2>
                <Button2 className="">Entre em contato</Button2>
              </ArticleContainer>
            </Article>
          </SectionContainer>
        </Section>
        <Section className="bg-gray-secondary">
          <SectionContainer>
            <Article className="w-full text-center" style={{ padding: '7% 0' }}>
              <ArticleContainer className="gap-10">
                <Title3>O Que Você Procura?</Title3>
                <Gallery>
                  <GalleryCheckText>
                    Implantar um sistema LIMS para substituir registros em
                    papel, planilhas, documentos eletrônicos ou outras soluções?
                  </GalleryCheckText>
                  <GalleryCheckText>
                    Substituir seu sistema atual, desenvolvido de forma caseira
                    e que não contam mais com o apoio e dedicação inicial?
                  </GalleryCheckText>
                  <GalleryCheckText>
                    Substituir seu sistema LIMS, porque existem lacunas e
                    processos não atendidos?
                  </GalleryCheckText>
                  <GalleryCheckText>
                    Substituir seu sistema LIMS, referência no mercado, mas os
                    custos de manutenção são exagerados?
                  </GalleryCheckText>
                </Gallery>
                <Paragraph3>
                  A ALLÌMS pode ajudar muito na busca da solução ideal:{' '}
                  <strong>Custos Reduzidos X Benefícios Elevados.</strong>
                </Paragraph3>
              </ArticleContainer>
            </Article>
          </SectionContainer>
        </Section>
        <Section className="bg-white">
          <SectionContainer>
            <Article className="w-full text-center" style={{ padding: '7% 0' }}>
              <ArticleContainer className="gap-10">
                <Title3 reverse>Benefícios do Sistema ALLÍMS</Title3>
                <Gallery>
                  <GalleryIconText icon={iconAgility}>
                    Segurança e agilidade na consulta dos resultados
                  </GalleryIconText>
                  <GalleryIconText icon={iconEquipment}>
                    Elimina transcrição de dados dos equipamentos
                  </GalleryIconText>
                  <GalleryIconText icon={iconFollowUp}>
                    Acompanhamento da rotina analítica em tempo real
                  </GalleryIconText>
                  <GalleryIconText icon={iconCalculation}>
                    Cálculo dos ensaios parametrizados pelo usuário
                  </GalleryIconText>
                  <GalleryIconText icon={iconConnection}>
                    Conexão segura com outros sistemas CRM, ERP
                  </GalleryIconText>
                  <GalleryIconText icon={iconTraceability}>
                    Rastreabilidade das informações cadastradas
                  </GalleryIconText>
                  <GalleryIconText icon={iconIso}>
                    Tranquilidade no atendimento da ISO 17.025
                  </GalleryIconText>
                  <GalleryIconText icon={iconConnection}>
                    100% dos usuários conectados 100% do tempo
                  </GalleryIconText>
                </Gallery>
              </ArticleContainer>
            </Article>
          </SectionContainer>
        </Section>
        <Section className="bg-orange-tertiary">
          <SectionContainer>
            <Article className="w-full text-center" style={{ padding: '7% 0' }}>
              <ArticleContainer className="gap-10">
                <Title3 reverse>Áreas de Atuação</Title3>
                <Gallery>
                  <GalleryPhotoText icon={areaDrinks}>
                    Alimentos e Bebidas
                  </GalleryPhotoText>
                  <GalleryPhotoText icon={areaSanitation}>
                    Saneamento
                  </GalleryPhotoText>
                  <GalleryPhotoText icon={areaCosmetics}>
                    Cosméticos
                  </GalleryPhotoText>
                  <GalleryPhotoText icon={areaFarm}>Agrícola</GalleryPhotoText>
                  <GalleryPhotoText icon={areaEnvironment}>
                    Meio Ambiente
                  </GalleryPhotoText>
                  <GalleryPhotoText icon={areaMining}>
                    Mineração e Metalúrgica
                  </GalleryPhotoText>
                  <GalleryPhotoText icon={areaNutrition}>
                    Nutrição Animal
                  </GalleryPhotoText>
                  <GalleryPhotoText icon={areaChemical}>
                    Química e Petroquímica
                  </GalleryPhotoText>
                </Gallery>
              </ArticleContainer>
            </Article>
          </SectionContainer>
        </Section>
        <Section bgImage={backgroundDemonstration}>
          <SectionContainer>
            <Article className="w-full text-center">
              <ArticleContainer>
                <Title2 className="">Solicite uma Demonstração</Title2>
                <Paragraph2 className="">
                  O sistema ALLÌMS vai muito além dos padrões.
                </Paragraph2>
                <Paragraph2 className="">
                  Esta etapa é fundamental para o processo de escolha do sistema
                  adequado para sua necessidade. É aqui onde você poderá
                  garantir o entendimento completo do sistema e capacidade de
                  resolver seus problemas, bem como avaliar o conhecimento
                  técnico da empresa que passará ser seu provedor de soluções.”
                </Paragraph2>
                <Paragraph2 className="">
                  Solicite agora mesmo e no fechamento do contrato ganhe até 3
                  mensalidades grátis!
                </Paragraph2>
                <Button2 className="">Entre em contato</Button2>
              </ArticleContainer>
            </Article>
          </SectionContainer>
        </Section>
        <Section className="bg-gray-primary p-10">
          <SectionContainer>
            <Article className="w-full text-center">
              <ArticleContainer>
                <Title3 className=" text-white">Depoimentos</Title3>
                <Paragraph2 className="">
                  Apresentamos um projeto ousado à ALLÌMS para gerenciamento de
                  análises na área de nutrição animal e, com muito
                  profissionalismo e empenho, os objetivos foram alçados. A
                  atenção, a vontade de fazer acontecer e a estrutura de suporte
                  da ALLÌMS, tem sido fatores fundamentais para o sucesso de
                  nossos projetos.
                </Paragraph2>
                <Paragraph2 className="">Aldair de Souza Santos</Paragraph2>
                <Paragraph2 className="">Gerente de serviços na DSM</Paragraph2>
              </ArticleContainer>
            </Article>
          </SectionContainer>
        </Section>
        <Section className="bg-white p-10">
          <SectionContainer>
            <Article className="w-full text-center">
              <ArticleContainer className="gap-20">
                <Title3 reverse>Clientes</Title3>
                <Gallery>
                  <Logo client="dsm" />
                  <Logo client="cooxupe" />
                  <Logo client="cls" />
                  <Logo client="cetal" />
                </Gallery>
              </ArticleContainer>
            </Article>
          </SectionContainer>
        </Section>
        <Section className="bg-gray-primary">
          <SectionContainer className="flex-col">
            <Article className="w-1/3">
              <ArticleContainer className="">
                <Image src={logoCompanySecondary} />
              </ArticleContainer>
            </Article>
            <Article className="w-2/3 text-center">
              <ArticleContainer>
                <Form className="w-[650px]">
                  <Title4 className="text-left">
                    Fale conosco através do formulário abaixo:
                  </Title4>
                  <Input placeholder="Nome" />
                  <FormContainer>
                    <Input placeholder="E-mail" />
                    <Input placeholder="Telefone" />
                  </FormContainer>
                  <Input placeholder="Empresa" />
                  <TextArea placeholder="Mensagem" />
                  <Button3>Enviar</Button3>
                </Form>
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
