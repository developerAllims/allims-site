import {
  Section,
  Article,
  ArticleContainer,
  ButtonLink,
  Image,
  Paragraph,
  Title,
  SectionContainer
} from '../../components'
import { dataPlaces } from '../../data'

export const LayoutPlaces = () => {
  const { icon, legend, title, items, button } = dataPlaces
  return (
    <Section className="bg-white h-full p-[10%] lg:p-0">
      <SectionContainer className="flex-col lg:flex-row">
        <Article className="lg:py-[10%] lg:px-0">
          <ArticleContainer className="pt-[27px] pr-[27px] pb-0 pl-0">
            <Image src={icon} alt={legend} />
          </ArticleContainer>
        </Article>
        <Article className="lg:py-[10%] lg:px-0">
          <ArticleContainer className="gap-2 pt-[27px] pr-0 pb-0 pl-[27px]">
            <Title className="text-4xl text-gray-primary">{title}</Title>
            {items.map((val, idx) => (
              <Paragraph
                key={`place-${idx}`}
                className="text-base text-gray-primary"
              >
                {val}
              </Paragraph>
            ))}
            <ButtonLink
              to={'/'}
              title={button}
              className="text-lg text-white border-3"
            />
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
