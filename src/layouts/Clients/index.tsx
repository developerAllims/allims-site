import { useEffect, useState } from 'react'
import { dataSource } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Gallery,
  Logo,
  Title,
  TitleContainer,
  TitleDivider
} from '../../components'
import { useLanguage } from '../../hooks'

export const LayoutClients = () => {
  const { language } = useLanguage()
  const { clients } = dataSource(language)
  const { title, items } = clients
  const [position, setPosition] = useState(0)
  const [fade, setFade] = useState(1)
  const max = 4
  const arr = new Array(max).fill(null).map((_, idx) => idx)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(0.1)
      setPosition(position + max >= items?.length ? 0 : position + max)
    }, 5000)
    return () => {
      clearInterval(interval)
      setFade(1)
    }
  }, [items?.length, position, fade])

  return (
    <Section className="bg-white p-10 h-full">
      <SectionContainer className="justify-center">
        <Article className="w-full text-center lg:w-4/5">
          <ArticleContainer className="gap-10 lg:gap-40 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            <Gallery
              className={`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-row lg:grid-flow-col gap-20`}
            >
              {arr.map(val => (
                <Logo
                  key={`client-${position + val}`}
                  client={items[position + val].name}
                  alt={`Logomarca do cliente ${items[position + val].title}`}
                  className="max-h-[80px]"
                  style={{ opacity: fade }}
                />
              ))}
            </Gallery>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
