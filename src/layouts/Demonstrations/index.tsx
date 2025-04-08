import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  ButtonLink,
  Paragraph,
  Title
} from '../../components'
import { dataDemonstrations } from '../../data'

interface LayoutDemonstrationsProps {
  isSimple?: boolean
}

export const LayoutDemonstrations = ({
  isSimple = false
}: LayoutDemonstrationsProps) => {
  const { icon, title, items, button } = dataDemonstrations
  return (
    <Section bgImage={icon} className={`h-[482px]`}>
      <SectionContainer>
        <Article className="w-full justify-center text-center text-shadow">
          <ArticleContainer className="gap-7">
            <Title className="text-4xl text-white">{title}</Title>
            {items.map((val, idx) => (
              <Paragraph key={`demo-${idx}`} className="text-xl text-white">
                {val}
              </Paragraph>
            ))}
            {isSimple ? (
              ''
            ) : (
              <ButtonLink
                to="/contato"
                title={button}
                className="text-lg text-white border-3"
              />
            )}
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
