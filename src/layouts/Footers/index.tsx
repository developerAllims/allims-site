import { logoTertiary } from '../../assets'
import { Footer, Image } from '../../components'

export const LayoutFooters = () => {
  return (
    <Footer style={{ padding: '1.7% 0' }}>
      <div className="flex flex-col items-start h-full">
        <span className="font-semibold">
          Todos os Direitos Reservados @ALLÌMS
        </span>
      </div>
      <div className="flex flex-col gap-1 items-start h-full">
        <span className="font-semibold">Desenvolvido por</span>
        <Image src={logoTertiary} className="w-32 h-10" />
      </div>
    </Footer>
  )
}
