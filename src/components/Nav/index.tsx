import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavProps extends ComponentProps<'nav'> {}

export const Nav = ({ children, ...rest }: NavProps) => {
  return <nav {...rest}>{children}</nav>
}
