import { backgroundTalk } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  ButtonLink,
  Paragraph,
  Title,
  SectionContainer
} from '../../components'
import { dataTalks } from '../../data'

export const LayoutTalks = () => {
  const { title, descriptions, button } = dataTalks
  return (
    <Section bgImage={backgroundTalk} className="h-[546px]">
      <SectionContainer>
        <Article className="w-full justify-center text-center py-[7%] px-0">
          <ArticleContainer className="gap-7 justify-center h-full text-shadow">
            <Title className="text-4xl text-white">{title}</Title>
            {descriptions.map((val, idx) => (
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
