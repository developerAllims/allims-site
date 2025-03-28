import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImageProps extends ComponentProps<'img'> {}

export const Image = ({ children, className, ...rest }: ImageProps) => {
  return (
    <img {...rest} className={` ${className}`}>
      {children}
    </img>
  )
}
