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
  return (
    <Section className="bg-gray-primary p-0 lg:p-10 h-full lg:h-[810px]">
      <SectionContainer className="h-full justify-center">
        <Article className="w-full text-center justify-center h-full gap-7 lg:gap-20 p-0 lg:w-4/5">
          <TitleContainer>
            <Title className="text-4xl text-white">{title}</Title>
            <TitleDivider className="text-orange-primary" />
          </TitleContainer>
          <ArticleContainer className="h-full">
            <CarouselTestimonials className="h-full" items={items} />
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
