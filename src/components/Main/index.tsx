/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface MainProps extends ComponentProps<'main'> {}

export const Main = ({ children, className = '', ...rest }: MainProps) => {
  return (
    <main
      {...rest}
      className={`flex flex-col justify-center w-full ${className}`}
    >
      {children}
    </main>
  )
}
