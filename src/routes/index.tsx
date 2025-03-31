import {
  PageCompany,
  PageContact,
  PageHome,
  PageModules,
  PageNotFound,
  PageSystem
} from '../pages'

export const appRoutes = [
  { path: '/', name: 'Home', page: PageHome },
  { path: '/sistema', name: 'Sistema', page: PageSystem },
  { path: '/modulos', name: 'Módulos', page: PageModules },
  { path: '/empresa', name: 'Empresa', page: PageCompany },
  { path: '/contato', name: 'Contato', page: PageContact },
  { path: '*', name: 'Default', page: PageNotFound, hide: true }
]
