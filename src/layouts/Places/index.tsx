import { places } from '../../assets'
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

export const LayoutPlaces = () => {
  const { icon, title, items, button } = places
  return (
    <Section className="bg-white h-full p-[10%] lg:p-0">
      <SectionContainer className="flex-col lg:flex-row">
        <Article className="lg:py-[10%] lg:px-0">
          <ArticleContainer className="pt-[27px] pr-[27px] pb-0 pl-0">
            <Image icon={icon} />
          </ArticleContainer>
        </Article>
        <Article className="lg:py-[10%] lg:px-0">
          <ArticleContainer className="gap-2 pt-[27px] pr-0 pb-0 pl-[27px]">
            <Title className="text-4xl text-gray-primary">{title}</Title>
            {items.map((val = '', idx = 0) => (
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
