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

export const MessagesLayout = () => {
  return (
    <Section className="bg-gray-primary">
      <SectionContainer className="flex-col">
        <Article className="w-1/3">
          <ArticleContainer className="">
            <Image src={logoCompanySecondary} />
          </ArticleContainer>
        </Article>
        <Article className="w-2/3 text-center">
          <ArticleContainer>
            <Form className="w-[650px]">
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
