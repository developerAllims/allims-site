import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LinkProps extends ComponentProps<'a'> {}

export const Link = ({ children, className = '', ...rest }: LinkProps) => {
  return (
    <a {...rest} className={` ${className}`}>
      {children}
    </a>
  )
}
