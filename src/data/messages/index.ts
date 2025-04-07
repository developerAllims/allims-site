import { z } from 'zod'
import { logoSecondary } from '../../assets'

export const dataMessages = {
  title: 'Fale conosco através do formulário abaixo:',
  icon: logoSecondary,
  fields: {
    name: {
      specs: {
        name: 'name',
        title: 'Nome',
        type: 'text'
      }
    },
    email: {
      specs: {
        name: 'email',
        title: 'E-mail',
        type: 'text'
      }
    },
    phone: {
      specs: {
        name: 'phone',
        title: 'Telefone',
        type: 'text',
        mask: '(__) _____-____'
      }
    },
    company: {
      specs: {
        name: 'company',
        title: 'Empresa',
        type: 'text'
      }
    },
    message: {
      specs: {
        name: 'message',
        title: 'Mensagem',
        type: 'textarea'
      }
    }
  },
  schema: z.object({
    name: z.string().nonempty(),
    email: z.string().nonempty().email(),
    phone: z.string().nonempty(),
    company: z.string().nonempty(),
    message: z.string().nonempty()
  }),
  items: [
    {
      name: 'Telefone',
      type: 'phone',
      code: 'tel',
      list: ['(19) 9.9173-8161', '(19) 9.8160-6342']
    },
    {
      name: 'Email',
      type: 'email',
      code: 'mailto',
      text: 'comercial@allims.com.br'
    },
    {
      name: 'Endereço',
      type: 'address',
      text: 'Rua Comendador Torlogo Dauntre n. 74, Sala 1207 - Cambuí - Campinas - SP - CEP 13.025-270',
      link: `https://www.google.com/maps/place/R.+Comendador+T%C3%B3rlogo+Dauntre,+74+-+Cambu%C3%AD,+Campinas+-+SP,+13025-270/@-22.8965566,-47.0505966,17z/data=!4m15!1m8!3m7!1s0x94c8cf454ff99701:0xb08af4199e4073fc!2sR.+Comendador+T%C3%B3rlogo+Dauntre,+74+-+Cambu%C3%AD,+Campinas+-+SP,+13025-270!3b1!8m2!3d-22.8965616!4d-47.0480217!16s%2Fg%2F11dzscy1_v!3m5!1s0x94c8cf454ff99701:0xb08af4199e4073fc!8m2!3d-22.8965616!4d-47.0480217!16s%2Fg%2F11dzscy1_v!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D`
    }
  ],
  button: 'Enviar'
}
