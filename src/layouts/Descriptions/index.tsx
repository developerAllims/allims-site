import { appConfig } from '../../assets'
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
import { useTranslator } from '../../hooks'

interface LayoutDescriptions {
  isSimple: boolean
}

export const LayoutDescriptions = ({ isSimple = false }) => {
  const t = useTranslator()
  const { descriptions } = appConfig
  const { title, items, button } = descriptions
  return (
    <Section className="p-[10%] lg:p-0 bg-gray-primary">
      <SectionContainer className="flex-col lg:flex-row w-full">
        <Article className="p-0 w-full">
          <ArticleContainer className="justify-start h-full p-0 lg:pt-[27px] lg:pr-[27px]">
            <Image className="h-full w-full" icon={'illustrationSystem'} />
          </ArticleContainer>
        </Article>
        <Article className="p-0 w-full">
          <ArticleContainer className="gap-3 justify-center lg:pt-[27px] pr-0 pb-0 lg:pl-[27px]">
            <Title className="text-4xl text-white">{t[title]}</Title>

            {isSimple ? (
              t[items].split('\n').map((val = '', idx = 0) => (
                <Paragraph key={`desc-${idx}`} className="text-base text-white">
                  {val}
                </Paragraph>
              ))
            ) : (
              <>
                <Paragraph className="text-base text-white">
                  {t[items].split('\n').join(' ')}
                </Paragraph>
                <ButtonLink
                  to="/sistema"
                  title={t[button]}
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
