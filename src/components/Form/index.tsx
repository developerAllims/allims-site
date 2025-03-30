import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FormProps extends ComponentProps<'form'> {}

export const Form = ({ children, className = '', ...rest }: FormProps) => {
  return (
    <form {...rest} className={`flex flex-col gap-4 ${className}`}>
      {children}
    </form>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FormContainerProps extends ComponentProps<'div'> {}

export const FormContainer = ({
  children,
  className = '',
  ...rest
}: FormContainerProps) => {
  return (
    <div {...rest} className={`flex gap-4 ${className}`}>
      {children}
    </div>
  )
}
