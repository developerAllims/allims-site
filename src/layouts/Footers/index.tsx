import { useEffect, useState } from 'react'
import { Footer, Image } from '../../components'
import { dataFooters } from '../../data'
import { version } from '../../../package.json'

export const LayoutFooters = () => {
  const { logo, copyright, devBy } = dataFooters

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
    <Footer
      style={
        hasScroll
          ? {
              padding: '1.7% 0'
            }
          : {
              padding: '1.7% 0',
              position: 'absolute',
              bottom: '0'
            }
      }
    >
      <div className="flex flex-col items-start h-full">
        <span className="font-semibold">{copyright}</span>
        <span className="font-semibold">{`v.${version}`}</span>
      </div>
      <div className="flex flex-col gap-1 items-start h-full">
        <span className="font-semibold">{devBy}</span>
        <Image src={logo} className="w-32 h-10" />
      </div>
    </Footer>
  )
}
