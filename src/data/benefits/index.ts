import {
  iconAgility,
  iconEquipment,
  iconFollowUp,
  iconCalculation,
  iconConnection,
  iconTraceability,
  iconIso
} from '../../assets'

export const dataBenefits = {
  title: 'Benefícios do Sistema ALLIMS',
  items: [
    {
      icon: iconAgility,
      legend: 'Segurança e agilidade',
      name: `Segurança e agilidade na consulta dos resultados`
    },
    {
      icon: iconEquipment,
      legend: 'Integração com equipamentos',
      name: `Elimina transcrição de dados dos equipamentos`
    },
    {
      icon: iconFollowUp,
      legend: 'Acompanhamento em tempo real',
      name: `Acompanhamento da rotina analítica em tempo real`
    },
    {
      icon: iconCalculation,
      legend: 'Personalização dos métodos',
      name: `Cálculo dos ensaios parametrizados pelo usuário`
    },
    {
      icon: iconConnection,
      legend: 'Conexão com outros sistemas',
      name: `Conexão segura com outros sistemas CRM, ERP`
    },
    {
      icon: iconTraceability,
      legend: 'Rastreabilidade',
      name: `Rastreabilidade das informações cadastradas`
    },
    {
      icon: iconIso,
      legend: 'Garantia da qualidade',
      name: `Tranquilidade no atendimento da ISO 17.025`
    },
    {
      icon: iconConnection,
      legend: 'Consulta de resultados online',
      name: `100% dos usuários conectados 100% do tempo`
    }
  ]
}
