/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface FooterProps extends ComponentProps<'footer'> {}

export const Footer = ({ children, className = '', ...rest }: FooterProps) => {
  return (
    <footer
      {...rest}
      className={`flex justify-center w-full min-h-36 bg-orange-primary text-white text-xs ${className}`}
    >
      <div className="flex w-full max-w-5xl justify-between items-center">
        {children}
      </div>
    </footer>
  )
}
