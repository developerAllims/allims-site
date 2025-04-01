import { backgroundTalk } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  Button,
  Paragraph,
  Title,
  SectionContainer
} from '../../components'
import { dataTalks } from '../../data'

export const LayoutTalks = () => {
  const { title, descriptions, button } = dataTalks
  return (
    <Section bgImage={backgroundTalk} style={{ height: '546px' }}>
      <SectionContainer>
        <Article
          className="w-full justify-center text-center"
          style={{ padding: '7% 0' }}
        >
          <ArticleContainer
            className="gap-7 justify-center h-full"
            style={{
              textShadow: '2px 2px 2px var(--color-gray-tertiary)'
            }}
          >
            <Title className="text-4xl text-white">{title}</Title>
            {descriptions.map((val, idx) => (
              <Paragraph key={`talk-${idx}`} className="text-xl text-white">
                {val}
              </Paragraph>
            ))}
            <Button href="/contato" className="text-lg text-white border-2">
              {button}
            </Button>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
