import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Image,
  Form,
  Button,
  FormContainer,
  Input,
  TextArea,
  Title,
  Gallery,
  GalleryIconLabelText
} from '../../components'
import { dataMessages } from '../../data'

interface LayoutMessagesProps {
  isSimple?: boolean
}

export const LayoutMessages = ({ isSimple = true }: LayoutMessagesProps) => {
  const {
    icon,
    title,
    button,
    fieldName,
    fieldEmail,
    fieldPhone,
    fieldCompany,
    fieldMessage,
    items
  } = dataMessages
  return (
    <Section
      className="bg-gray-primary"
      style={{ height: '682px', padding: '2% 0' }}
    >
      <SectionContainer>
        <Article
          className="w-1/3"
          style={{ padding: `${isSimple ? '5%' : '5% 5% 0 0'}` }}
        >
          <ArticleContainer>
            {isSimple ? (
              <Image src={icon} />
            ) : (
              <Gallery className="gap-10 justify-start">
                {items.map(({ name, type, text }, idx) => (
                  <GalleryIconLabelText
                    key={`msg-info-${idx}`}
                    iconType={type}
                    label={name}
                  >
                    {text}
                  </GalleryIconLabelText>
                ))}
              </Gallery>
            )}
          </ArticleContainer>
        </Article>
        <Article className="w-2/3 text-center" style={{ padding: '5% 0' }}>
          <ArticleContainer>
            {/* TODO: refactor */}
            <Form className="w-[650px] gap-5">
              <Title className="text-2xl text-white text-left">{title}</Title>
              <Input placeholder={fieldName} required />
              <FormContainer>
                <Input placeholder={fieldEmail} required />
                <Input placeholder={fieldPhone} required />
              </FormContainer>
              <Input placeholder={fieldCompany} required />
              <TextArea placeholder={fieldMessage} required />
              <Button
                className="text-lg bg-orange-primary text-white"
                classContainer="justify-end"
              >
                {button}
              </Button>
            </Form>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
