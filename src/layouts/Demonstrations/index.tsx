import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Button,
  Paragraph,
  Title
} from '../../components'
import { dataDemonstrations } from '../../data'

export const LayoutDemonstrations = () => {
  const { icon, title, items, button } = dataDemonstrations
  return (
    <Section bgImage={icon} style={{ height: '482px' }}>
      <SectionContainer>
        <Article className="w-full justify-center text-center">
          <ArticleContainer
            className="gap-7"
            style={{
              textShadow: '2px 2px 2px var(--color-gray-tertiary)'
            }}
          >
            <Title className="text-4xl text-white">{title}</Title>
            {items.map((val, idx) => (
              <Paragraph key={`demo-${idx}`} className="text-xl text-white">
                {val}
              </Paragraph>
            ))}
            <Button className="text-lg text-white border-2">{button}</Button>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
