import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Title3,
  Paragraph2,
  Paragraph4
} from '../../components'
import { dataTestimonials } from '../../data'

export const LayoutTestimonials = () => {
  const { title, items } = dataTestimonials
  const testimonial = items[0] || {}
  return (
    <Section className="bg-gray-primary p-10" style={{ height: '711px' }}>
      <SectionContainer>
        <Article className="w-full text-center justify-center h-full gap-30">
          <Title3 className=" text-white">{title}</Title3>
          <ArticleContainer className="gap-1">
            <Paragraph2 className="text-lg">{testimonial?.text}</Paragraph2>
            <Paragraph2 className="text-[23px]">
              <strong>{testimonial?.name}</strong>
            </Paragraph2>
            <Paragraph4 className="text-lg text-orange-primary">
              {testimonial?.role}
            </Paragraph4>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
