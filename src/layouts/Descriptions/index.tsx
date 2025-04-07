import {
  Section,
  Article,
  ArticleContainer,
  ButtonLink,
  Image,
  Paragraph,
  Title,
  SectionContainer
} from '../../components'
import { dataDescriptions } from '../../data'

interface LayoutDescriptions {
  isSimple: boolean
}

export const LayoutDescriptions = ({ isSimple = false }) => {
  const { icon, title, items, button } = dataDescriptions
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
            className="gap-3 justify-center"
            style={{ padding: '27px 0 0 27px' }}
          >
            <Title className="text-4xl text-white">{title}</Title>

            {isSimple ? (
              items.map((val, idx) => (
                <Paragraph key={`desc-${idx}`} className="text-base text-white">
                  {val}
                </Paragraph>
              ))
            ) : (
              <>
                <Paragraph className="text-base text-white">
                  {items.join(' ')}
                </Paragraph>
                <ButtonLink
                  to="/sistema"
                  className="text-lg text-white border-2"
                  classContainer="justify-start py-[12px]"
                >
                  {button}
                </ButtonLink>
              </>
            )}
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
