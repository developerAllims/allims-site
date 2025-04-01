import {
  segmentChemical,
  segmentCosmetics,
  segmentDrinks,
  segmentEnvironment,
  segmentFarm,
  segmentMining,
  segmentNutrition,
  segmentSanitation
} from '../../assets'

export const dataSegments = {
  title: 'Áreas de Atuação',
  items: [
    {
      icon: segmentDrinks,
      name: 'Alimentos e Bebidas'
    },
    {
      icon: segmentSanitation,
      name: 'Saneamento'
    },
    {
      icon: segmentCosmetics,
      name: 'Cosméticos'
    },
    {
      icon: segmentFarm,
      name: 'Agrícola'
    },
    {
      icon: segmentEnvironment,
      name: 'Meio Ambiente'
    },
    {
      icon: segmentMining,
      name: 'Mineração e Metalúrgica'
    },
    {
      icon: segmentNutrition,
      name: 'Nutrição Animal'
    },
    {
      icon: segmentChemical,
      name: 'Química e Petroquímica'
    }
  ]
}
