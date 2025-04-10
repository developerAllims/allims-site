import { starts } from '../../assets'
import {
  Section,
  SectionContainer,
  Article,
  ArticleContainer,
  Paragraph,
  ButtonLink,
  TitleMain
} from '../../components'

export const LayoutStarts = () => {
  const { icon, title, slogan, button } = starts
  return (
    <Section bgImage={icon} className="h-full">
      <SectionContainer className="justify-start lg:justify-center h-full p-[10%] lg:py-[120px] lg:px-0">
        <Article className="hidden lg:flex" />
        <Article className="lg:py-[27px] lg:px-[60px] justify-center">
          <ArticleContainer className="justify-center gap-7 h-[274px] w-[377px]">
            <TitleMain className="text-[55px] text-orange-primary">
              {title}
            </TitleMain>
            <Paragraph className="text-xl text-gray-primary max-w-[320px] lg:max-w-screen">
              {slogan}
            </Paragraph>
            <ButtonLink
              to="/sistema"
              title={button}
              className="text-lg bg-orange-primary text-white"
              classContainer="justify-start"
            />
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
