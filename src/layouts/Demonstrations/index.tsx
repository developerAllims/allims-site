import { appConfig } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  ButtonLink,
  Paragraph,
  Title
} from '../../components'
import { useTranslator } from '../../hooks'

interface LayoutDemonstrationsProps {
  isSimple?: boolean
}

export const LayoutDemonstrations = ({
  isSimple = false
}: LayoutDemonstrationsProps) => {
  const t = useTranslator()
  const { demonstrations } = appConfig
  const { title, items, button } = demonstrations

  return (
    <Section
      bgImage={'backgroundDemonstration'}
      className={`h-full p-[10%] lg:p-0`}
    >
      <SectionContainer className="justify-center">
        <Article className="w-full justify-center text-center text-shadow lg:w-4/5">
          <ArticleContainer className="gap-7">
            <Title className="text-4xl text-white">{t[title]}</Title>
            {t[items].split('\n').map((val = '', idx = 0) => (
              <Paragraph key={`demo-${idx}`} className="text-xl text-white">
                {val}
              </Paragraph>
            ))}
            {isSimple ? (
              ''
            ) : (
              <ButtonLink
                to="/contato"
                title={t[button]}
                className="text-lg text-white border-3"
              />
            )}
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
