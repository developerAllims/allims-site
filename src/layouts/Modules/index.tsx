import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Title5,
  Paragraph3,
  Button1,
  Divider
} from '../../components'

export const LayoutModules = () => {
  const modules = [
    {
      title: 'ALLÌMS Manager',
      description: `O ALLÌMS Manager permite mapear todos os processos analíticos do laboratório, desde a recepção da amostra até a expedição do Relatório de Ensaio (laudo) para o cliente. É responsável por etapas primordiais como análise crítica no recebimento da amostra.`
    },
    {
      title: 'ALLÌMS CRM',
      description: `Este módulo faz por completo o gerenciamento do relacionamento com os clientes do laboratório. Desde as primeiras interações para entendimento das demandas, registro/histórico dos contatos, data para folllow-up, negociações, versões das propostas até a aprovação final.`
    },
    {
      title: 'ALLÌMS Calendar',
      description: `No módulo ALLÌMS Calendar o setor de logística poderá ajustar as datas previstas para coleta conforme alinhamento final com o cliente e conforme seu roteiro de coleta. As coletas são apresentadas em forma de calendário, o que permite muita agilidade e visibilidade das programações definidas.`
    },
    {
      title: 'ALLÌMS Mobile Collect',
      description: `O ALLÌMS Mobile Collect primeiro realiza o registro das informações de campo em disposto móvel, após o setor de logística revisar e finalizar no módulo ALLÌMS Calendar as datas previstas para coleta, a lista de amostras, bem como as informações de campo.`
    },
    {
      title: 'ALLÌMS Warehouse',
      description: `O ALLÌMS Warehouse é um módulo para gerenciamento dos insumos do laboratório: estoque, lote, validade de reagentes, preparo de soluções e materiais de consumo. Traz como grande benefício a redução de desperdícios e a conscientização de uso de materiais por parte dos analistas.`
    },
    {
      title: 'ALLÌMS ELN',
      description: `O caderno eletrônico de dados do ALLÌMS, baseado no conceito mundial de ELN (Electonic Lab Notebook), é 100% direcionado a gestão das análises, bem como potencializa ao máximo a eliminação de papel no dia a dia do laboratório.`
    },
    {
      title: 'ALLÌMS Custody',
      description: `O Allims Custody está preparado para gerenciar com precisão todas as funções da cadeia da custódia dentro e fora do laboratório, inclusive com travas automáticas.`
    },
    {
      title: 'ALLÌMS SDMS',
      description: `Sabendo do grande volume de arquivos e documentos gerenciados em diversas áreas do laboratório, o ALLÌMS possui um módulo que permite a gestão desses documentos e a integração desses documentos aos processos analíticos.`
    },
    {
      title: 'ALLÌMS Connection',
      description: `O módulo ALLÌMS Connection proporciona ao laboratório trocar informações com os sistemas: CRM, ERP, PIMS, MES e outros, além de fazer conexão e aquisição de dados dos equipamentos do laboratório. O módulo Connection é considerado um dos principais responsáveis pela redução dos erros de transcrição de dados.`
    },
    {
      title: 'ALLÌMS Lab.Online',
      description: `O ALLÌMS Lab.OnLine permite aos clientes do laboratório consultar os resultados analíticos diretamente no portal da Web. No Lab.OnLine é possível: acompanhar os status das amostras no laboratório, consultar resultados das amostras, imprimir os Relatórios de Ensaio (laudo PDF), encaminhar amostras para outras pessoas.`
    },
    {
      title: 'ALLÌMS ISO',
      description: `O ALLÌMS ISO oferece o controle dos registros e apontadores exigidos pela ISO/IEC 17025, apoiando a área de qualidade do laboratório em todas as responsabilidades referentes a esta norma. Este módulo traz diversas ferramentas como controle de capacitação de colaboradores, calibração de equipamentos,`
    },
    {
      title: 'ALLÌMS Notifications',
      description: `Imagine o sistema notificando seus usuários ou clientes conforme as ações são realizadas dentro do laboratório.
      Diversas ocorrências no sistema podem ser vinculadas ao envio de e-mails automático ou notificações para o App ALLÌMS Notification no seu celular.`
    }
  ]
  const setPairModules = () => {
    const pairs = []
    for (let index = 0; index < modules.length; index += 2) {
      const left = modules[index]
      const right = modules[index + 1]
      const pair = { left, right }
      pairs.push(pair)
    }
    return pairs
  }
  const pairModules = setPairModules()
  return (
    <Section className="bg-gray-secondary py-20" style={{ padding: '1%' }}>
      <SectionContainer className="flex-col">
        {pairModules.map(({ left, right }, idx) => (
          <>
            <div className="flex gap-6 h-full">
              <Article
                key={`module-${left?.title}`}
                className="w-full text-center h-full"
                style={{ padding: '7% 0' }}
              >
                <ArticleContainer className="gap-6 items-start h-full">
                  <Title5>{left?.title}</Title5>
                  <Paragraph3 className="text-left">
                    {left?.description}
                  </Paragraph3>
                  <Button1>Saiba mais</Button1>
                </ArticleContainer>
              </Article>
              <Article
                key={`module-${right?.title}`}
                className="w-full text-center"
                style={{ padding: '7% 0' }}
              >
                <ArticleContainer className="gap-6 items-start h-full">
                  <Title5>{right?.title}</Title5>
                  <Paragraph3 className="text-left">
                    {right?.description}
                  </Paragraph3>
                  <Button1>Saiba mais</Button1>
                </ArticleContainer>
              </Article>
            </div>
            {idx + 1 < pairModules.length && <Divider />}
          </>
        ))}
      </SectionContainer>
    </Section>
  )
}
