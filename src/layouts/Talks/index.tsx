import { images, talks } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  ButtonLink,
  Paragraph,
  Title,
  SectionContainer
} from '../../components'

export const LayoutTalks = () => {
  const { icon, title, descriptions, button } = talks
  return (
    <Section bgImage={images[icon]} className="h-full p-[10%] lg:p-0">
      <SectionContainer className="lg:justify-center">
        <Article className="w-full justify-center text-center lg:py-[7%] px-0 lg:w-4/5">
          <ArticleContainer className="gap-7 justify-center h-full text-shadow">
            <Title className="text-4xl text-white">{title}</Title>
            {descriptions.map((val = '', idx = 0) => (
              <Paragraph key={`talk-${idx}`} className="text-xl text-white">
                {val}
              </Paragraph>
            ))}
            <ButtonLink
              to="/contato"
              title={button}
              className="text-lg text-white border-3"
            />
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
