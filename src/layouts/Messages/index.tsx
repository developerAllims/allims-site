import {
  Section,
  Article,
  ArticleContainer,
  SectionContainer,
  Image,
  FormRow,
  Title,
  Gallery,
  GalleryIconLabelText,
  FormBase,
  ButtonSubmit,
  FormContainer,
  FormField
} from '../../components'
import { dataMessages } from '../../data'

interface LayoutMessagesProps {
  isSimple?: boolean
}

export const LayoutMessages = ({ isSimple = true }: LayoutMessagesProps) => {
  const { icon, title, button, fields, schema, items } = dataMessages
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
            <FormContainer>
              <FormBase resolver={schema}>
                <Title className="text-2xl text-white text-left">{title}</Title>
                <FormField config={fields.name} />
                <FormRow>
                  <FormField config={fields.email} />
                  <FormField config={fields.phone} />
                </FormRow>
                <FormField config={fields.company} />
                <FormField config={fields.message} />
                <ButtonSubmit
                  className="text-lg bg-orange-primary text-white"
                  classContainer="justify-end"
                >
                  {button}
                </ButtonSubmit>
              </FormBase>
            </FormContainer>
          </ArticleContainer>
        </Article>
      </SectionContainer>
    </Section>
  )
}
