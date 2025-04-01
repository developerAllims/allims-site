import { Main } from '../../components'
import {
  LayoutDescriptions,
  LayoutExplanations,
  LayoutFeatures,
  LayoutFooters,
  LayoutHeaders,
  LayoutMessages,
  LayoutTitles,
  LayoutWins
} from '../../layouts'

export const PageSystem = () => {
  return (
    <>
      <LayoutHeaders />
      <Main>
        <LayoutTitles />
        <LayoutDescriptions isSimple={true} />
        <LayoutFeatures />
        <LayoutWins />
        <LayoutExplanations />
        <LayoutMessages />
      </Main>
      <LayoutFooters />
    </>
  )
}
