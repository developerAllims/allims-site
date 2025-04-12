import { dataSource } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  ButtonLink,
  Paragraph,
  Title
} from '../../components'
import { useLanguage } from '../../hooks'

export const LayoutConcepts = () => {
  const { language } = useLanguage()
  const { concepts } = dataSource(language)
  const { items } = concepts

  const links = ['/sistema#lims', '/empresa']

  return (
    <Section className="flex-col lg:flex-row bg-orange-secondary">
      {items.map(({ title = '', descriptions = [], button = '' }, idx = 0) => (
        <Article
          key={`concept-${idx}`}
          className={`justify-start w-full px-[10%] ${
            idx % 2 === 0 ? 'bg-orange-primary' : 'bg-orange-secondary'
          }`}
        >
          <ArticleContainer className="justify-start h-full">
            <Title className="text-4xl text-white">{title}</Title>
            {descriptions.map((val = '', idxP = 0) => (
              <Paragraph
                key={`concept-${idx}-p-${idxP}`}
                className="text-base text-white"
              >
                {val}
              </Paragraph>
            ))}

            <ButtonLink
              to={links[idx]}
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
