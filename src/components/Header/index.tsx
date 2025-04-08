/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface HeaderProps extends ComponentProps<'header'> {}

export const Header = ({ children, className = '', ...rest }: HeaderProps) => {
  return (
    <header
      {...rest}
      className={`flex justify-center w-full text-sm font-semibold text-gray-primary bg-white border-gray-300 ${className}`}
    >
      <div className="flex w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl justify-between items-center">
        {children}
      </div>
    </header>
  )
}
