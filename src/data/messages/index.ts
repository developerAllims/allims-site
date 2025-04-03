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
      text: '(19) 99173-8161 | (19) 98160-6342'
    },
    {
      name: 'Email',
      type: 'email',
      text: 'comercial@allims.com.br'
    },
    {
      name: 'Endereço',
      type: 'address',
      text: 'Rua Comendador Torlogo Dauntre n. 74, Sala 1207 - Cambuí - Campinas - SP - CEP 13.025-270'
    }
  ],
  button: 'Enviar'
}
