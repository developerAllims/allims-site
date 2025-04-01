import {
  Section,
  Article,
  ArticleContainer,
  Button,
  Image,
  Paragraph,
  Title,
  SectionContainer
} from '../../components'
import { dataDescriptions } from '../../data'

export const LayoutDescriptions = () => {
  const { icon, title, description, button } = dataDescriptions
  return (
    <Section className="bg-gray-primary" style={{ height: '598px' }}>
      <SectionContainer>
        <Article style={{ padding: '10% 0' }}>
          <ArticleContainer
            className="justify-start h-full"
            style={{ padding: '27px 27px 0 0' }}
          >
            <Image src={icon} />
          </ArticleContainer>
        </Article>
        <Article style={{ padding: '10% 0' }}>
          <ArticleContainer
            className="gap-8 justify-center h-full"
            style={{ padding: '27px 0 0 27px' }}
          >
            <Title className="text-4xl text-white">{title}</Title>
            <Paragraph className="text-base text-white">
              {description}
            </Paragraph>
            <Button className="text-lg text-white border-2">{button}</Button>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
