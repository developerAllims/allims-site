/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  backgroundSystem,
  backgroundCompany,
  backgroundModules
} from '../assets'
import {
  PageCompany,
  PageContact,
  PageHome,
  PageModules,
  PageNotFound,
  PageSystem
} from '../pages'

type TRoute = {
  path: string
  name: string
  page: any
  title?: string
  hide?: false | true
  bgImage?: string
}

export const appRoutes: Array<TRoute> = [
  { path: '/', name: 'Home', page: PageHome },
  {
    path: '/sistema',
    name: 'Sistema',
    page: PageSystem,
    bgImage: backgroundSystem
  },
  {
    path: '/modulos',
    name: 'Módulos',
    page: PageModules,
    bgImage: backgroundModules
  },
  {
    path: '/empresa',
    name: 'Empresa',
    page: PageCompany,
    title: 'ALLIMS',
    bgImage: backgroundCompany
  },
  { path: '/contato', name: 'Contato', page: PageContact },
  { path: '*', name: 'Default', page: PageNotFound, hide: true }
]

export const getBasePath = (path = '') => {
  const parts = path.split('/') || []
  return `/${parts[1] || ''}`
}
