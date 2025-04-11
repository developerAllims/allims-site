import { useEffect, useState } from 'react'
import { footers } from '../../assets'
import {
  Footer,
  Image,
  Policy,
  SocialContainer,
  SocialIcon,
  SocialWhatsApp,
  PageContainer
} from '../../components'
import { version } from '../../../package.json'

export const LayoutFooters = () => {
  const { logo, copyright } = footers

  const [pageHeight, setPageHeight] = useState(0)
  const [viewHeight, setViewHeight] = useState(0)
  const [hasScroll, setHasScroll] = useState(false)

  useEffect(() => {
    const onPageLoad = () => {
      setPageHeight(document.body.scrollHeight)
      setViewHeight(document.documentElement.clientHeight)
    }

    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad, false)
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])

  useEffect(() => {
    setHasScroll(pageHeight > viewHeight)
  }, [pageHeight, viewHeight])

  return (
    <>
      <Footer
        className="min-h-38"
        style={
          hasScroll
            ? {}
            : {
                position: 'absolute',
                bottom: '0'
              }
        }
      >
        <div className="flex w-full min-h-36 justify-center p-[3%] lg:py-[15px] lg:px-0 bg-orange-primary text-white text-xs">
          <PageContainer className="justify-between">
            <Image icon={logo} className="w-48 h-15" />
            <SocialContainer>
              <SocialIcon type="facebook" />
              <SocialIcon type="instagram" />
              <SocialIcon type="linkedin" />
            </SocialContainer>
          </PageContainer>
        </div>
        <div className="flex w-full min-h-2 justify-center p-[3%] lg:py-[2px] lg:px-0 bg-gray-secondary text-gray-primary text-xs">
          <PageContainer className="justify-between">
            <span className="font-semibold">{copyright}</span>
            <span className="font-semibold">{`v.${version}`}</span>
          </PageContainer>
        </div>
      </Footer>
      {hasScroll ? (
        ''
      ) : (
        <div className="w-full h-[calc(40px + 2 * 1.7%)] bg-white" />
      )}
      <Policy />
      <SocialWhatsApp />
    </>
  )
}
