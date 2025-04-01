import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Title,
  Paragraph,
  Button,
  Divider
} from '../../components'
import { dataModules } from '../../data'

export const LayoutModules = () => {
  const { items } = dataModules
  const setPairModules = () => {
    const pairs = []
    for (let index = 0; index < items.length; index += 2) {
      const left = items[index]
      const right = items[index + 1]
      const pair = { left, right }
      pairs.push(pair)
    }
    return pairs
  }
  const pairModules = setPairModules()
  return (
    <Section className="bg-gray-secondary py-20" style={{ padding: '1%' }}>
      <SectionContainer className="flex-col">
        {pairModules.map(({ left, right }, idx) => (
          <>
            <div className="flex gap-6 h-full">
              <Article
                key={`module-${left?.title}`}
                className="w-full text-center h-full"
                style={{ padding: '7% 0' }}
              >
                <ArticleContainer className="gap-6 items-start h-full">
                  <Title className="text-3xl text-gray-primary">
                    {left?.title}
                  </Title>
                  <Paragraph className="text-base text-gray-primary text-left">
                    {left?.description}
                  </Paragraph>
                  <Button className="text-lg bg-orange-primary text-white">
                    {left?.button}
                  </Button>
                </ArticleContainer>
              </Article>
              <Article
                key={`module-${right?.title}`}
                className="w-full text-center"
                style={{ padding: '7% 0' }}
              >
                <ArticleContainer className="gap-6 items-start h-full">
                  <Title className="text-3xl text-gray-primary">
                    {right?.title}
                  </Title>
                  <Paragraph className="text-base text-gray-primary text-left">
                    {right?.description}
                  </Paragraph>
                  <Button className="text-lg bg-orange-primary text-white">
                    {right?.button}
                  </Button>
                </ArticleContainer>
              </Article>
            </div>
            {idx + 1 < pairModules.length && <Divider />}
          </>
        ))}
      </SectionContainer>
    </Section>
  )
}
