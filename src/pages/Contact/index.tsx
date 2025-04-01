import { Main } from '../../components'
import {
  LayoutDemonstrations,
  LayoutFooters,
  LayoutHeaders,
  LayoutMessages
} from '../../layouts'

export const PageContact = () => {
  return (
    <>
      <LayoutHeaders />
      <Main>
        <LayoutDemonstrations />
        <LayoutMessages />
      </Main>
      <LayoutFooters />
    </>
  )
}
