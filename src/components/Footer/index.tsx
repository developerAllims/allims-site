/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface FooterProps extends ComponentProps<'footer'> {}

export const Footer = ({ children, className = '', ...rest }: FooterProps) => {
  return (
    <footer
      {...rest}
      className={`flex justify-center w-full min-h-36 bg-orange-primary text-white text-xs ${className}`}
    >
      <div className="flex w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl justify-between items-center">
        {children}
      </div>
    </footer>
  )
}
