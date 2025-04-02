import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImageProps extends ComponentProps<'img'> {}

export const Image = ({ children, className = '', ...rest }: ImageProps) => {
  return (
    <img {...rest} className={`object-contain ${className}`}>
      {children}
    </img>
  )
}

interface LogoProps extends ComponentProps<'img'> {
  client: string
}

export const Logo = ({
  children,
  className = '',
  client,
  ...rest
}: LogoProps) => {
  return (
    <img
      {...rest}
      src={`https://allims-files.s3.sa-east-1.amazonaws.com/front/${client}_logo_color.png`}
      className={`max-h-[50px] object-contain ${className}`}
    >
      {children}
    </img>
  )
}
