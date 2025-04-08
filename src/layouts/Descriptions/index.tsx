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
    <Section className="bg-gray-primary h-[598px]">
      <SectionContainer>
        <Article className="py-[10%] px-0">
          <ArticleContainer className="justify-start h-full pt-[27px] pr-[27px] pb-0 pl-0">
            <Image src={icon} />
          </ArticleContainer>
        </Article>
        <Article className="py-[10%] px-0">
          <ArticleContainer className="gap-3 justify-center pt-[27px] pr-0 pb-0 pl-[27px]">
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
                  title={button}
                  className="text-lg text-white border-2"
                  classContainer="justify-start py-[12px]"
                />
              </>
            )}
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
