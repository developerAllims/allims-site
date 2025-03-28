import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HeaderProps extends ComponentProps<'header'> {}

export const Header = ({ ...rest }: HeaderProps) => {
  return (
    <header className="flex w-full justify-center" {...rest}>
      <span className="text-amber-500">Ola</span>
    </header>
  )
}
