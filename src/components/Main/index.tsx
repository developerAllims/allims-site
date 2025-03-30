import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
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
