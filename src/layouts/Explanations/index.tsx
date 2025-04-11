import { dataSource } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Paragraph,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'
import { useLanguage } from '../../hooks'

export const LayoutExplanations = () => {
  const { language } = useLanguage()
  const { explanations } = dataSource(language)
  const { title, items } = explanations
  return (
    <Section id="lims" className="bg-white p-10 h-full">
      <SectionContainer className="justify-center">
        <Article className="w-full text-center py-[7%] px-0 lg:w-4/5">
          <ArticleContainer className="justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            {items.map((val = '', idx = 0) => (
              <Paragraph
                key={`explanation-${idx}`}
                className="text-base text-gray-primary text-justify"
              >
                {val}
              </Paragraph>
            ))}
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
