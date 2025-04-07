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
  const { icon, title, items, button } = dataPlaces
  return (
    <Section className="bg-white" style={{ height: '548px' }}>
      <SectionContainer>
        <Article style={{ padding: '10% 0' }}>
          <ArticleContainer style={{ padding: '27px 27px 0 0' }}>
            <Image src={icon} />
          </ArticleContainer>
        </Article>
        <Article style={{ padding: '10% 0' }}>
          <ArticleContainer
            className="gap-2"
            style={{ padding: '27px 0 0 27px' }}
          >
            <Title className="text-4xl text-gray-primary">{title}</Title>
            {items.map((val, idx) => (
              <Paragraph
                key={`place-${idx}`}
                className="text-base text-gray-primary"
              >
                {val}
              </Paragraph>
            ))}
            <ButtonLink to={'/'} className="text-lg text-white border-2">
              {button}
            </ButtonLink>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
