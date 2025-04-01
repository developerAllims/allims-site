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
import { dataExplanations } from '../../data'

export const LayoutExplanations = () => {
  const { title, items } = dataExplanations
  return (
    <Section id="lims" className="bg-white p-10" style={{ height: '750px' }}>
      <SectionContainer>
        <Article className="w-full text-center" style={{ padding: '7% 0' }}>
          <ArticleContainer className="justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            {items.map((val, idx) => (
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
