import { Main } from '../../components'
import {
  LayoutSegments,
  LayoutBenefits,
  LayoutClients,
  LayoutStarts,
  LayoutConcepts,
  LayoutDemonstrations,
  LayoutFooters,
  LayoutHeaders,
  LayoutMessages,
  LayoutDescriptions,
  LayoutTalks,
  LayoutTestimonials,
  LayoutWants
} from '../../layouts'

export const PageHome = () => {
  return (
    <>
      <LayoutHeaders />
      <Main>
        <LayoutStarts />
        <LayoutConcepts />
        <LayoutDescriptions />
        <LayoutTalks />
        <LayoutWants />
        <LayoutBenefits />
        <LayoutSegments />
        <LayoutDemonstrations />
        <LayoutTestimonials />
        <LayoutClients />
        <LayoutMessages />
      </Main>
      <LayoutFooters />
    </>
  )
}
