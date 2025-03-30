import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Paragraph1Props extends ComponentProps<'p'> {}

export const Paragraph1 = ({
  children,
  className = '',
  ...rest
}: Paragraph1Props) => {
  return (
    <p
      {...rest}
      className={`text-xl text-gray-primary font-semibold ${className}`}
    >
      {children}
    </p>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Paragraph2Props extends ComponentProps<'p'> {}

export const Paragraph2 = ({
  children,
  className = '',
  ...rest
}: Paragraph2Props) => {
  return (
    <p {...rest} className={`text-base text-white font-semibold ${className}`}>
      {children}
    </p>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Paragraph3Props extends ComponentProps<'p'> {}

export const Paragraph3 = ({
  children,
  className = '',
  ...rest
}: Paragraph3Props) => {
  return (
    <p
      {...rest}
      className={`text-base text-gray-primary font-semibold ${className}`}
    >
      {children}
    </p>
  )
}
