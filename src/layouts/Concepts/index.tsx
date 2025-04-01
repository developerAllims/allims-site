import {
  Section,
  Article,
  ArticleContainer,
  Button,
  Paragraph,
  Title
} from '../../components'
import { dataConcepts } from '../../data'

export const LayoutConcepts = () => {
  const { items } = dataConcepts
  return (
    <Section>
      {items.map(({ title, descriptions, button }, idx) => (
        <Article
          key={`concept-${idx}`}
          className={`justify-start h-full ${
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

            <Button className="text-lg text-white border-2">{button}</Button>
          </ArticleContainer>
        </Article>
      ))}
    </Section>
  )
}
