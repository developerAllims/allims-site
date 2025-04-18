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
        <LayoutDemonstrations isSimple={true} />
        <LayoutMessages isSimple={false} />
      </Main>
      <LayoutFooters />
    </>
  )
}
