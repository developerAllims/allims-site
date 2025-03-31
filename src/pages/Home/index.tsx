import { Main } from '../../components'
import {
  AreasLayout,
  BenefitsLayout,
  ClientsLayout,
  CompanyLayout,
  ConceptsLayout,
  DemonstrationsLayout,
  FooterLayout,
  HeaderLayout,
  MessagesLayout,
  SystemLayout,
  TalksLayout,
  TestimonialsLayout,
  WantsLayout
} from '../../layouts'

export const PageHome = () => {
  return (
    <>
      <HeaderLayout />
      <Main>
        <CompanyLayout />
        <ConceptsLayout />
        <SystemLayout />
        <TalksLayout />
        <WantsLayout />
        <BenefitsLayout />
        <AreasLayout />
        <DemonstrationsLayout />
        <TestimonialsLayout />
        <ClientsLayout />
        <MessagesLayout />
      </Main>
      <FooterLayout />
    </>
  )
}
