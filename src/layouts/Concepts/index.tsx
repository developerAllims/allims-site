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
    <Section className="flex-col lg:flex-row bg-orange-secondary">
      {items.map(({ title, descriptions, button, route }, idx) => (
        <Article
          key={`concept-${idx}`}
          className={`justify-start w-full px-[10%] ${
            idx % 2 === 0 ? 'bg-orange-primary' : 'bg-orange-secondary'
          }`}
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
              title={button}
              className={`text-lg border-3 text-white ${
                idx % 2 === 0 ? 'bg-orange-primary' : 'bg-orange-secondary'
              }`}
              classContainer="justify-start"
            />
          </ArticleContainer>
        </Article>
      ))}
    </Section>
  )
}
