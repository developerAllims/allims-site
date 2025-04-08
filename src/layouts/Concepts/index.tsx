import {
  Section,
  Article,
  ArticleContainer,
  ButtonLink,
  Paragraph,
  Title
} from '../../components'
import { dataConcepts } from '../../data'

export const LayoutConcepts = () => {
  const { items } = dataConcepts
  return (
    <Section>
      {items.map(({ title, descriptions, button, route }, idx) => (
        <Article
          key={`concept-${idx}`}
          className={`justify-start ${
            idx % 2 === 0 ? 'bg-orange-primary' : 'bg-orange-secondary'
          }`}
          style={{ height: '552px' }}
        >
          <ArticleContainer className="justify-start h-full">
            <Title className="text-4xl text-white">{title}</Title>
            {descriptions.map((val, idxP) => (
              <Paragraph
                key={`concept-${idx}-p-${idxP}`}
                className="text-base text-white"
              >
                {val}
              </Paragraph>
            ))}

            <ButtonLink
              to={route}
              className="text-lg text-white border-2"
              classContainer="justify-start"
            >
              {button}
            </ButtonLink>
          </ArticleContainer>
        </Article>
      ))}
    </Section>
  )
}
