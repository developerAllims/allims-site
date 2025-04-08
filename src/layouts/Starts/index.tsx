import {
  Section,
  SectionContainer,
  Article,
  ArticleContainer,
  Title,
  Paragraph,
  ButtonLink
} from '../../components'
import { dataStarts } from '../../data'

export const LayoutStarts = () => {
  const { icon, title, slogan, button } = dataStarts
  return (
    <Section bgImage={icon} className="h-[570px]">
      <SectionContainer className="justify-center h-full py-[calc(120px + 80px)] px-0">
        <Article />
        <Article className="py-[27px] px-[60px]">
          <ArticleContainer className="justify-center gap-7 h-[274px] w-[377px]">
            <Title className="text-[55px] text-orange-primary">{title}</Title>
            <Paragraph className="text-xl text-gray-primary">
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
