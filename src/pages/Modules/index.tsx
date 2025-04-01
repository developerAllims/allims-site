import { Main } from '../../components'
import {
  LayoutFooters,
  LayoutHeaders,
  LayoutMessages,
  LayoutTitles
} from '../../layouts'
import { LayoutModules } from '../../layouts/Modules'

export const PageModules = () => {
  return (
    <>
      <LayoutHeaders />
      <Main>
        <LayoutTitles />
        <LayoutModules />
        <LayoutMessages />
      </Main>
      <LayoutFooters />
    </>
  )
}
