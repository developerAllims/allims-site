/* eslint-disable @typescript-eslint/no-explicit-any */
import { routes } from '../assets'
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
  name: string
  page: any
  title?: string
  hide?: false | true
  bgImage?: string
}

export const appRoutes: Array<TRoute> = routes.map(
  ({
    path = '',
    name = '',
    page = '',
    bgImage = '',
    title = '',
    hide = false
  }) => ({
    path,
    name,
    page: pages[page],
    bgImage,
    title,
    hide
  })
)

export const getBasePath = (path = '') => {
  const parts = path.split('/') || []
  return `/${parts[1] || ''}`
}
