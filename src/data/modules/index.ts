import { moduleManager } from '../../assets'

export const dataModules = {
  items: [
    {
      title: 'ALLIMS',
      button: 'Saiba mais',
      description: `O ALLIMS permite mapear todos os processos analíticos do laboratório, desde a recepção da amostra até a expedição do Relatório de Ensaio (laudo) para o cliente. É responsável por etapas primordiais como análise crítica no recebimento da amostra.`,
      modal: {
        title: 'ALLIMS',
        image: moduleManager,
        legend: 'Módulo do ALLIMS',
        lines: [
          `O ALLIMS permite mapear todos os processos analíticos do laboratório, desde a recepção da amostra até a expedição do Relatório de Ensaio (laudo) para o cliente. É responsável por etapas primordiais como análise crítica no recebimento da amostra, distribuição das tarefas analíticas, inserção dos ensaios, controle de bancada (ELN), interfaceamento com equipamentos (Conection) e expedição dos resultados através da emissão de relatórios (Lab.OnLine).`,
          `O sistema ALLIMS contempla diversas ferramentas para o dia a dia dos analistas. Possui interface (tela) gerencial completa, permite a visualização de serviços a serem iniciados, em andamento, atrasados e finalizados, por meio do mapa de trabalho é possível gerenciar a carga de tarefa de cada setor e/ou analista e redistribuir os serviços.`,
          `Os ensaios são parametrizados de acordo com seu procedimento operacional e normas regulatórias, os analistas possuem total liberdade para configurá-los, assim como as amostras também são previamente padronizadas por tipo de material, ensaios a serem realizados, limites de controle, serviços analíticos, entre outras. Desta forma a rotina analítica fica previsível, sem surpresa para os analistas, pois após o recebimento das amostras os serviços são distribuídos automaticamente.`,
          `O ALLIMS permite otimização de tempo do processo analítico como um todo, rastreabilidade e apoio à gestão de normativas como a ISO/IEC 17025. Pode ser utilizado também pelas áreas analítica, gerencial e executiva da empresa, pois mapeia o laboratório, serviços a serem realizados e priorizados, métricas de gestão e avaliação de metas criadas.`
        ]
      }
    },
    {
      title: 'Comercial',
      button: 'Saiba mais',
      description: `Este módulo faz por completo o gerenciamento do relacionamento com os clientes do laboratório. Desde as primeiras interações para entendimento das demandas, registro/histórico dos contatos, data para folllow-up, negociações, versões das propostas até a aprovação final.`,
      modal: {
        title: 'Comercial',
        image: moduleManager,
        legend: 'Módulo do ALLIMS',
        lines: [
          `Este módulo faz por completo o gerenciamento do relacionamento com os clientes do laboratório. Desde as primeiras interações para entendimento das demandas, registro/histórico dos contatos, data para folllow-up, negociações, versões das propostas até a aprovação final.`,
          `O módulo também controla as faixas de desconto por usuário, ou seja, de acordo com perfil de cada um a porcentagem pode variar. O sistema irá manter para aprovação do superior quando um desconto for maior do que o permitido.`,
          `A tabela de preço também poderá ser exclusiva para uma categoria de cliente, por cliente ou geral. Cada tabela poderá sofrer reajustes específicos sem afetar as demais e sem afetar as propostas já cadastradas, ou seja, não altera o histórico. Os clientes poderão receber e-mails com o arquivo PDF da proposta assim que uma versão for finalizada.`,
          `No portal Lab.OnLine também é possível acompanhar o histórico de cada proposta, bem como negociar e gerar interações com o laboratório. Os arquivos PDF de cada versão da proposta estarão disponíveis para consulta.`,
          `Com o Comercial é possível gerenciar propostas “curtas” de execução pontual ou ainda gerenciar contratos de longo prazo. O módulo faz a gestão do contrato indicando as quantidades e valores previstos versus as quantidades e valores realizados.`,
          `A forma de pagamento também poderá ser adequada de várias formas, com parcelas definidas, por exemplo: 30/60/90, ou com valores fixos mensais, e o sistema informa o saldo no final do contrato ou ainda dentro de um período definido pelo usuário, além de informar as amostras finalizadas e ainda não faturadas.`,
          `A partir da aprovação da proposta comercial é possível definir o pré-agendamento das coletas, o agendamento definitivo será feito no módulo Agenda.`,
          `É muito comum o módulo Comercial se conectar com outros sistemas do laboratório como CRM ou ERP. Nestes casos podemos conectar, por meio do módulo de Integrações, os cadastros de clientes, tabelas de preço, faturamento, entre outros recursos.`
        ]
      }
    },
    {
      title: 'Agenda',
      button: 'Saiba mais',
      description: `No módulo Agenda o setor de logística poderá ajustar as datas previstas para coleta conforme alinhamento final com o cliente e conforme seu roteiro de coleta. As coletas são apresentadas em forma de calendário, o que permite muita agilidade e visibilidade das programações definidas.`,
      modal: {
        title: 'Agenda',
        image: moduleManager,
        legend: 'Módulo do ALLIMS',
        lines: [
          `No módulo Agenda o setor de logística poderá ajustar as datas previstas para coleta conforme alinhamento final com o cliente e conforme seu roteiro de coleta. As coletas são apresentadas em forma de calendário, o que permite muita agilidade e visibilidade das programações definidas, além disso os coletadores poderão acompanhar sua programação, bem como, preparar as suas atividades com antecedência. há ainda a possibilidade dos planos de amostragem serem impressos pelo sistema.`,
          `As coletas também poderão ser enviadas para um dispositivo móvel para registro em campo, módulo Coleta Mobile, de modo que as informações de coleta serão digitadas ou transferidas automaticamente para o ALLIMS.`
        ]
      }
    },
    {
      title: 'Coleta Mobile',
      button: 'Saiba mais',
      description: `O Coleta Mobile primeiro realiza o registro das informações de campo em disposto móvel, após o setor de logística revisar e finalizar no módulo Agenda as datas previstas para coleta, a lista de amostras, bem como as informações de campo.`,
      modal: {
        title: 'Coleta Mobile',
        image: moduleManager,
        legend: 'Módulo do ALLIMS',
        lines: [
          `O Coleta Mobile primeiro realiza o registro das informações de campo em disposto móvel, após o setor de logística revisar e finalizar no módulo Agenda as datas previstas para coleta, a lista de amostras, bem como as informações de campo, poderá ser enviada para o dispositivo móvel: tablet (Android ®), smartphone ou outros.`,
          `Em campo o coletor poderá localizar a amostra no sistema por meio da digitação do código da amostra ou leitura do código de barras ou QRCode constante na etiqueta da amostra, após todas as informações serem registradas os dados poderão ser enviados para o laboratório via conexão dados com a internet ou caso não tenha sinal de internet disponível no momento, assim que o dispositivo for conectado os dados da coleta serão enviados para o ALLIMS.`,
          `No ALLIMS será registrado o recebimento das amostras, de forma que o sistema também irá controlar as pendências e/ou inconsistências encontradas nos registros de campo.`
        ]
      }
    },
    {
      title: 'Insumos',
      button: 'Saiba mais',
      description: `Insumos é um módulo para gerenciamento dos insumos do laboratório: estoque, lote, validade de reagentes, preparo de soluções e materiais de consumo. Traz como grande benefício a redução de desperdícios e a conscientização de uso de materiais por parte dos analistas.`,
      modal: {
        title: 'Insumos',
        image: moduleManager,
        legend: 'Módulo do ALLIMS',
        lines: [
          `O módulo de Insumos é um módulo para gerenciamento dos insumos do laboratório: estoque, lote, validade de reagentes, preparo de soluções e materiais de consumo. Traz como grande benefício a redução de desperdícios e a conscientização de uso de materiais por parte dos analistas, pois oferece controle completo de materiais e gestão de suprimentos por departamento ou por colaborador, em um determinado período.`,
          `O módulo controla todas as entradas de materiais com gestão de nomenclaturas para eliminar possibilidades de estoques sem controle no sistema. Permite a gestão hierárquica de tarefas que devem ser executadas por colaboradores internos, indicando prazos e sazonalidade nas compras.`,
          `O módulo de Insumos está preparado para trabalhar com os regulamentos de compras de materiais perigosos, com relatórios preparados para atender o exército e a polícia federal. Faz a gestão de compra junto ao fornecedor através de mensagens automáticas.`,
          `Também permite gerenciar os insumos, meios de cultura e reagentes que são utilizados nos ensaios. Ao passo que os ensaios são registrados no sistema, caso esteja configurado, o ALLIMS irá obrigar o analista a informar o insumo, o lote e a quantidade consumida. Caso alguma restrição de uso ocorrer, como por exemplo: lote vencido, o sistema irá bloquear o vínculo deste insumo no sistema.`
        ]
      }
    },
    {
      title: 'Custódia',
      button: 'Saiba mais',
      description: `O módulo de Custódia está preparado para gerenciar com precisão todas as funções da cadeia da custódia dentro e fora do laboratório, inclusive com travas automáticas.`,
      modal: {
        title: 'Custódia',
        image: moduleManager,
        legend: 'Módulo do ALLIMS',
        lines: [
          `O módulo de Custódia está preparado para gerenciar com precisão todas as funções da cadeia da custódia dentro e fora do laboratório, inclusive com travas automáticas. Oferece rastreabilidade de manipulações e armazenamentos em ambientes controlados como estufas, freezer, termômetros, entre outros.`,
          `O módulo é responsável por avaliar o ambiente controlado através de métricas de qualidade, definidas de acordo com cada ambiente e equipamento, podendo reter uma amostra a partir de um apontador pré-definido.`,
          `O módulo de Custódia gerencia todo o percurso da amostra, desde a saída do cliente até todas as passagens dentro do laboratório.`
        ]
      }
    },
    {
      title: 'Integrações',
      button: 'Saiba mais',
      description: `O módulo de Integrações proporciona ao laboratório trocar informações com os sistemas: CRM, ERP, PIMS, MES e outros, além de fazer conexão e aquisição de dados dos equipamentos do laboratório. O módulo Connection é considerado um dos principais responsáveis pela redução dos erros de transcrição de dados.`,
      modal: {
        title: 'Integrações',
        image: moduleManager,
        legend: 'Módulo do ALLIMS',
        lines: [
          `O módulo de Integrações proporciona ao laboratório trocar informações com os sistemas: CRM, ERP, PIMS, MES e outros, além de fazer conexão e aquisição de dados dos equipamentos do laboratório.`,
          `O módulo Connection é considerado um dos principais responsáveis pela redução dos erros de transcrição de dados, do tempo de entrega dos resultados e re-digitação de informações, aumento da produtividade e da qualidade, além da automação de processos.`,
          `A conexão com outros sistemas garante a integridade das informações, por exemplo, o cadastro de clientes pode ser mandatório no CRM ou ERP e enviar informações para serem atualizadas no ALLIMS, que por sua vez, bloqueia qualquer alteração cadastral nos clientes.`,
          `Outra forma de comunicação bastante comum é o sistema ALLIMS informar aos outros sistemas quando as amostras forem finalizadas, a partir desta informação podemos notificar o CRM ou ERP que as amostras podem ser faturadas ou enviar para o ERP, PIMS ou MES os resultados analíticos para serem tratados na linha de processo ou produção.`,
          `Muito frequente também são as conexões com os equipamentos analíticos, adquirir dados desses equipamentos é muito simples. Equipamentos como: cromatógrafos, ICP, absorção atômica, entre outros, geram arquivos com os dados da amostra analisada e dos resultados de cada parâmetro gerado pelo equipamento, estes arquivos são salvos em formatos: TXT, CSV, XLS, ou outros, dessa forma o módulo Connection consegue capturar estes arquivos e interpretar os resultados para gravá-los no banco de dados do ALLIMS.`,
          `Existem outras conexões para aquisição de dados que são mais simples, conexão com: balanças, pHmetros, entre outros, nestes casos os equipamentos são conectados diretamente ao sistema e a leitura dos resultados é enviada diretamente para o sistema.`
        ]
      }
    },
    {
      title: 'Lab.Online',
      button: 'Saiba mais',
      description: `O Lab.OnLine permite aos clientes do laboratório consultar os resultados analíticos diretamente no portal da Web. No Lab.OnLine é possível: acompanhar os status das amostras no laboratório, consultar resultados das amostras, imprimir os Relatórios de Ensaio (laudo PDF), encaminhar amostras para outras pessoas.`,
      modal: {
        title: 'Lab.Online',
        image: moduleManager,
        legend: 'Módulo do ALLIMS',
        lines: [
          `O Lab.OnLine permite aos clientes do laboratório consultar os resultados analíticos diretamente no portal da Web.`,
          `No Lab.OnLine é possível: acompanhar os status das amostras no laboratório, consultar resultados das amostras, imprimir os Relatórios de Ensaio (laudo PDF), encaminhar amostras para outras pessoas, exportar informações para o Excel, entre outros recursos.`,
          `Permite aos clientes do laboratório validar a autenticidade dos Relatórios que estão em suas mãos. O cliente irá acessar o Lab.OnLine e informar o no. do relatório, mais a chave de validação impressa no Relatório. Esta chave é única e segue o padrão mundial MD-5.`,
          `Com estes dados o Lab.OnLine irá abrir o Relatório de Ensaio original para o cliente confrontar com o que está impresso.`,
          `O Lab.OnLine também permite aos clientes do laboratório pré registrar as amostras, gerar número e etiqueta de identificação com código de barras. Quando as amostras chegarem no laboratório o recebimento será mais rápido e mais qualificado.`,
          `No Lab.OnLine o cliente também poderá consultar o histórico das propostas comerciais aprovadas, bem como negociar e trocar mensagens com o laboratório das propostas em aberto.`
        ]
      }
    },
    {
      title: 'Garantia da Qualidade',
      button: 'Saiba mais',
      description: `O módulo de Garantia da Qualidade oferece o controle dos registros e apontadores exigidos pela ISO/IEC 17025, apoiando a área de qualidade do laboratório em todas as responsabilidades referentes a esta norma. Este módulo traz diversas ferramentas como controle de capacitação de colaboradores, calibração de equipamentos,`,
      modal: {
        title: 'Garantia da Qualidade',
        image: moduleManager,
        legend: 'Módulo do ALLIMS',
        lines: [
          `O módulo de Garantia da Qualidade oferece o controle dos registros e apontadores exigidos pela ISO/IEC 17025, apoiando a área de qualidade do laboratório em todas as responsabilidades referentes a esta norma.`,
          `Este módulo traz diversas ferramentas como controle de capacitação de colaboradores, calibração de equipamentos, gestão de tomada de ação baseada em possíveis RNC, entre outras.`,
          `Suas principais atividades são alertar o gestor da qualidade sobre as metas traçadas, prazos e problemas a serem resolvidos.`,
          `Ele permite o registro da intermediação entre o laboratório e o cliente, e está preparado para receber dados como feedbacks tanto positivos quanto negativos e, no caso deste, comprovar o problema, atribuir tarefas e controlar os prazos dos reparos.`
        ]
      }
    },
    {
      title: 'Alertas',
      button: 'Saiba mais',
      description: `Imagine o sistema notificando seus usuários ou clientes conforme as ações são realizadas dentro do laboratório.
        Diversas ocorrências no sistema podem ser vinculadas ao envio de e-mails automático ou notificações para o módulo de Alertas no seu celular.`,
      modal: {
        title: 'Alertas',
        image: moduleManager,
        legend: 'Módulo do ALLIMS',
        lines: [
          `Imagine o sistema notificando seus usuários ou clientes conforme as ações são realizadas dentro do laboratório.`,
          `Diversas ocorrências no sistema podem ser vinculadas ao envio de e-mails automático ou notificações para o módulo de Alertas no seu celular.`,
          `As pessoas autorizadas poderão receber informações como:`,
          {
            type: 'ul',
            items: [
              `Quantidade de amostras recebidas, finalizadas e reprovadas hoje, nesta semana, na última semana,…`,
              `Quantidade de insumos a vencer ou vencidos`,
              `Quantidade de equipamentos a calibrar ou vencidos`,
              `Ou ainda qualquer outra informação contida no banco de dados do sistema ALLIMS`
            ]
          },
          `Poderão ser diversas notificações customizadas para a sua necessidade. Notificações com base em clientes, amostras, ensaios, emissão de relatórios entre outras.`
        ]
      }
    }
  ]
}
