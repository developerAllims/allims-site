import { messages } from '../../assets'
import { AiOutlineWhatsApp } from 'react-icons/ai'

export const WhatsApp = () => {
  const { whatsapp } = messages
  return (
    <div className="flex fixed right-6 lg:right-8 bottom-6 lg:bottom-8 z-97 rounded-full">
      <a
        href={whatsapp}
        target="_blank"
        className="cursor-pointer border-4 border-green-primary rounded-full bg-green-primary"
      >
        <AiOutlineWhatsApp className="h-14 lg:h-18 w-14 lg:w-18 text-white" />
      </a>
    </div>
  )
}
