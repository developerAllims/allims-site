import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Title,
  TitleContainer,
  TitleDivider,
  CarouselTestimonials
} from '../../components'
import { dataTestimonials } from '../../data'

export const LayoutTestimonials = () => {
  const { title, items } = dataTestimonials
  // TODO: refactor
  return (
    <Section className="bg-gray-primary p-10" style={{ height: '711px' }}>
      <SectionContainer>
        <Article
          className="w-full text-center justify-center h-full gap-20"
          style={{ padding: '0' }}
        >
          <TitleContainer>
            <Title className="text-4xl text-white">{title}</Title>
            <TitleDivider className="text-orange-primary" />
          </TitleContainer>
          <ArticleContainer>
            <CarouselTestimonials items={items} />
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
