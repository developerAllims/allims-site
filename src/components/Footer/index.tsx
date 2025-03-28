import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FooterProps extends ComponentProps<'footer'> {}

export const Footer = ({ children, ...rest }: FooterProps) => {
  return <footer {...rest}>{children}</footer>
}
