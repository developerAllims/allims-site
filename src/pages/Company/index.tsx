import { Main } from '../../components'
import {
  LayoutClients,
  LayoutDemonstrations,
  LayoutDescriptions,
  LayoutFooters,
  LayoutHeaders,
  LayoutMessages,
  LayoutPlaces,
  LayoutSegments,
  LayoutTitles
} from '../../layouts'

export const PageCompany = () => {
  return (
    <>
      <LayoutHeaders />
      <Main>
        <LayoutTitles />
        <LayoutPlaces />
        <LayoutDescriptions />
        <LayoutClients />
        <LayoutSegments />
        <LayoutDemonstrations />
        <LayoutMessages />
      </Main>
      <LayoutFooters />
    </>
  )
}
