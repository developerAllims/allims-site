import { dataSource } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  ButtonLink,
  Paragraph,
  Title
} from '../../components'
import { useLanguage } from '../../hooks'

interface LayoutDemonstrationsProps {
  isSimple?: boolean
}

export const LayoutDemonstrations = ({
  isSimple = false
}: LayoutDemonstrationsProps) => {
  const { language } = useLanguage()
  const { demonstrations } = dataSource(language)
  const { title, items, button } = demonstrations

  return (
    <Section
      bgImage={'backgroundDemonstration'}
      className={`h-full p-[10%] lg:p-0`}
    >
      <SectionContainer className="justify-center">
        <Article className="w-full justify-center text-center text-shadow lg:w-4/5">
          <ArticleContainer className="gap-7">
            <Title className="text-4xl text-white">{title}</Title>
            {items.map((val = '', idx = 0) => (
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
