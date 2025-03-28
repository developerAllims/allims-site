import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImageProps extends ComponentProps<'img'> {}

export const Image = ({ children, ...rest }: ImageProps) => {
  return <img {...rest}>{children}</img>
}
