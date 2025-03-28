import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HeaderProps extends ComponentProps<'header'> {}

export const Header = ({ children, ...rest }: HeaderProps) => {
  return (
    <header className="flex w-full justify-center" {...rest}>
      <h1 className="text-amber-500">{children}</h1>
    </header>
  )
}
