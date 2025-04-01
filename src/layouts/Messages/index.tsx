import { logoCompanySecondary } from '../../assets'
import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Image,
  Form,
  Button3,
  FormContainer,
  Input,
  TextArea,
  Title4
} from '../../components'

export const LayoutMessages = () => {
  return (
    <Section
      className="bg-gray-primary"
      style={{ height: '682px', padding: '2% 0' }}
    >
      <SectionContainer>
        <Article className="w-1/3" style={{ padding: '5%' }}>
          <ArticleContainer>
            <Image src={logoCompanySecondary} />
          </ArticleContainer>
        </Article>
        <Article className="w-2/3 text-center" style={{ padding: '5% 0' }}>
          <ArticleContainer>
            <Form className="w-[650px] gap-5">
              <Title4 className="text-left">
                Fale conosco através do formulário abaixo:
              </Title4>
              <Input placeholder="Nome" />
              <FormContainer>
                <Input placeholder="E-mail" />
                <Input placeholder="Telefone" />
              </FormContainer>
              <Input placeholder="Empresa" />
              <TextArea placeholder="Mensagem" />
              <Button3>Enviar</Button3>
            </Form>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
