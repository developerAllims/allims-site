import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery4,
  GalleryCheckText,
  Title3,
  Button1
} from '../../components'

export const LayoutFeatures = () => {
  return (
    <Section className="bg-gray-secondary" style={{ height: '737px' }}>
      <SectionContainer>
        <Article className="w-full text-center" style={{ padding: '7% 0' }}>
          <ArticleContainer className="gap-10 justify-center h-full">
            <Title3>Funcionalidades do Sistema</Title3>
            <Gallery4>
              <GalleryCheckText>
                Controle de propostas comerciais e contratos
              </GalleryCheckText>
              <GalleryCheckText>
                Automação nos registros de dados
              </GalleryCheckText>
              <GalleryCheckText>
                Controle do almoxarifado e preparo de soluções
              </GalleryCheckText>
              <GalleryCheckText>
                Emissão de relatórios gerenciais
              </GalleryCheckText>

              <GalleryCheckText>Recepção de amostras</GalleryCheckText>
              <GalleryCheckText>
                Controle estatístico das amostras padrão
              </GalleryCheckText>
              <GalleryCheckText>
                Controle de equipamentos e vidrarias
              </GalleryCheckText>
              <GalleryCheckText>
                Gerenciamento de metodologias analíticas
              </GalleryCheckText>

              <GalleryCheckText>
                Gerenciamento dos trabalhos analíticos
              </GalleryCheckText>
              <GalleryCheckText>
                Elaboração de relatórios de ensaios
              </GalleryCheckText>
              <GalleryCheckText>
                Planejamento do uso de recursos do laboratório
              </GalleryCheckText>
              <GalleryCheckText>
                Gerenciamento de usuários e privilégios de acesso
              </GalleryCheckText>
            </Gallery4>
            <Button1>Conheça os Módulos</Button1>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
