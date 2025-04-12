import { appConfig } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  ButtonLink,
  Paragraph,
  Title
} from '../../components'
import { useTranslator } from '../../hooks'

export const LayoutConcepts = () => {
  const t = useTranslator()
  const { concepts } = appConfig
  const { items } = concepts

  const links = ['/sistema#lims', '/empresa']

  return (
    <Section className="flex-col lg:flex-row bg-orange-secondary">
      {items.map(({ title = '', descriptions = '', button = '' }, idx = 0) => (
        <Article
          key={`concept-${idx}`}
          className={`justify-start w-full px-[10%] ${
            idx % 2 === 0 ? 'bg-orange-primary' : 'bg-orange-secondary'
          }`}
        >
          <ArticleContainer className="justify-start h-full">
            <Title className="text-4xl text-white">{t[title]}</Title>
            {t[descriptions].split('\n').map((val = '', idxP = 0) => (
              <Paragraph
                key={`concept-${idx}-p-${idxP}`}
                className="text-base text-white"
              >
                {val}
              </Paragraph>
            ))}

            <ButtonLink
              to={links[idx]}
              title={t[button]}
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
