/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface FooterProps extends ComponentProps<'footer'> {}

export const Footer = ({ children, className = '', ...rest }: FooterProps) => {
  return (
    <footer {...rest} className={`flex w-full ${className}`}>
      <div className="flex flex-col w-full">{children}</div>
    </footer>
  )
}
