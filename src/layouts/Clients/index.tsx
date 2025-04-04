import { useEffect, useState } from 'react'
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
import { dataClients } from '../../data'

export const LayoutClients = () => {
  const { title, items } = dataClients
  const [position, setPosition] = useState(0)
  const max = 4
  const arr = new Array(max).fill(null).map((_, idx) => idx)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position + max >= items?.length ? 0 : position + max)
    }, 5000)
    return () => clearInterval(interval)
  }, [items?.length, position])

  return (
    <Section className="bg-white p-10" style={{ height: '574px' }}>
      <SectionContainer>
        <Article className="w-full text-center">
          <ArticleContainer className="gap-40 justify-center h-full">
            <TitleContainer>
              <Title className="text-4xl text-orange-primary">{title}</Title>
              <TitleDivider className="text-gray-primary" />
            </TitleContainer>
            {/* TODO: refactor */}
            <Gallery className={`grid-cols-${max} gap-20`}>
              {arr.map(val => (
                <Logo
                  key={`client-${position + val}`}
                  client={items[position + val]}
                  style={{ maxHeight: '80px' }}
                />
              ))}
            </Gallery>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
