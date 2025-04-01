import {
  Section,
  SectionContainer,
  Article,
  ArticleContainer,
  Title,
  Paragraph,
  Button
} from '../../components'
import { dataStarts } from '../../data'

export const LayoutStarts = () => {
  const { icon, title, slogan, button } = dataStarts
  return (
    <Section bgImage={icon} style={{ height: '570px' }}>
      <SectionContainer
        className="justify-center h-full"
        style={{ padding: 'calc(120px + 80px) 0' }}
      >
        <Article />
        <Article style={{ padding: '27px 60px' }}>
          <ArticleContainer
            className="justify-center gap-7"
            style={{ height: '274px', width: '377px' }}
          >
            <Title className="text-[55px] text-orange-primary">{title}</Title>
            <Paragraph className="text-xl text-gray-primary">
              {slogan}
            </Paragraph>
            <Button
              className="text-lg bg-orange-primary text-white"
              classContainer="justify-start"
            >
              {button}
            </Button>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
