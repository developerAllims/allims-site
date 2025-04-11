/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'
import { PageContainer } from '../../components'

interface HeaderProps extends ComponentProps<'header'> {}

export const Header = ({ children, className = '', ...rest }: HeaderProps) => {
  return (
    <header
      {...rest}
      className={`flex justify-center w-full text-sm font-semibold text-gray-primary bg-white border-gray-300 ${className}`}
    >
      <PageContainer className="justify-between items-center">
        {children}
      </PageContainer>
    </header>
  )
}
