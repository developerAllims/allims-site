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
      legend: 'Alimentos e Bebidas',
      name: 'Alimentos e Bebidas'
    },
    {
      icon: segmentSanitation,
      legend: 'Saneamento',
      name: 'Saneamento'
    },
    {
      icon: segmentCosmetics,
      legend: 'Cosméticos',
      name: 'Cosméticos'
    },
    {
      icon: segmentFarm,
      legend: 'Agrícola',
      name: 'Agrícola'
    },
    {
      icon: segmentEnvironment,
      legend: 'Meio Ambiente',
      name: 'Meio Ambiente'
    },
    {
      icon: segmentMining,
      legend: 'Mineração e Metalúrgica',
      name: 'Mineração e Metalúrgica'
    },
    {
      icon: segmentNutrition,
      legend: 'Nutrição Animal',
      name: 'Nutrição Animal'
    },
    {
      icon: segmentChemical,
      legend: 'Química e Petroquímica',
      name: 'Química e Petroquímica'
    }
  ]
}
