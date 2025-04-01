import { Footer, Image } from '../../components'
import { dataFooters } from '../../data'

export const LayoutFooters = () => {
  const { logo, copyright, devBy } = dataFooters
  return (
    <Footer style={{ padding: '1.7% 0' }}>
      <div className="flex flex-col items-start h-full">
        <span className="font-semibold">{copyright}</span>
      </div>
      <div className="flex flex-col gap-1 items-start h-full">
        <span className="font-semibold">{devBy}</span>
        <Image src={logo} className="w-32 h-10" />
      </div>
    </Footer>
  )
}
