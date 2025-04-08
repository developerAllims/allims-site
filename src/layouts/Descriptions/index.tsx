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
    <Section className="lg:py-[10%] px-[10%] lg:px-0 bg-gray-primary">
      <SectionContainer className="flex-col lg:flex-row w-full">
        <Article className="py-[10%] lg:py-0 px-0 w-full">
          <ArticleContainer className="justify-start h-full pt-[27px] pr-[27px] pb-0 pl-0">
            <Image className="h-full w-full" src={icon} />
          </ArticleContainer>
        </Article>
        <Article className="py-[10%] lg:py-0 px-0 w-full">
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
                  className="text-lg text-white border-3"
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
