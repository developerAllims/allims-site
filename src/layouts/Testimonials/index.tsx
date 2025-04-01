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
import { dataTestimonials } from '../../data'

export const LayoutTestimonials = () => {
  const { title, items } = dataTestimonials
  // TODO: refactor
  const testimonial = items[0] || {}
  return (
    <Section className="bg-gray-primary p-10" style={{ height: '711px' }}>
      <SectionContainer>
        <Article className="w-full text-center justify-center h-full gap-30">
          <TitleContainer>
            <Title className="text-4xl text-white">{title}</Title>
            <TitleDivider className="text-orange-primary" />
          </TitleContainer>
          <ArticleContainer className="gap-1">
            <Paragraph className="text-lg text-white">
              {testimonial?.text}
            </Paragraph>
            <Paragraph className="text-[23px] text-white">
              <strong>{testimonial?.name}</strong>
            </Paragraph>
            <Paragraph className="text-lg text-orange-primary">
              {testimonial?.role}
            </Paragraph>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
