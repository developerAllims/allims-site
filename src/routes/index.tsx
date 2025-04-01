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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page: any
  title?: string
  hide?: false | true
  bgImage?: string
}

export const appRoutes: Array<TRoute> = [
  { path: '/', name: 'Home', page: PageHome },
  {
    path: '/sistema',
    name: 'Sistema ALLÌMS',
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
    title: 'ALLÌMS',
    bgImage: backgroundCompany
  },
  { path: '/contato', name: 'Contato', page: PageContact },
  { path: '*', name: 'Default', page: PageNotFound, hide: true }
]
