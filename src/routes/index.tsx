/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PageCompany,
  PageContact,
  PageHome,
  PageModules,
  PageNotFound,
  PageSystem
} from '../pages'

export const pages: any = {
  pageHome: PageHome,
  pageSistema: PageSystem,
  pageModulos: PageModules,
  pageEmpresa: PageCompany,
  pageContato: PageContact,
  pageDefault: PageNotFound
}

type TRoute = {
  path: string
  page: any
  hide?: false | true
}

export const appRoutes: Array<TRoute> = [
  { path: '/', page: PageHome },
  {
    path: '/sistema',
    page: PageSystem
  },
  {
    path: '/modulos',
    page: PageModules
  },
  {
    path: '/empresa',
    page: PageCompany
  },
  { path: '/contato', page: PageContact },
  { path: '*', page: PageNotFound, hide: true }
]

export const getBasePath = (path = '') => {
  const parts = path.split('/') || []
  return `/${parts[1] || ''}`
}
