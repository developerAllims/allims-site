import { ComponentProps } from 'react'
import { images } from '../../assets'

interface ImageProps extends ComponentProps<'img'> {
  classContainer?: string
  icon: string
}

export const Image = ({
  children,
  className = '',
  classContainer = '',
  icon,
  ...rest
}: ImageProps) => {
  return (
    <div className={`flex ${classContainer}`}>
      <img
        {...rest}
        src={images[icon]}
        className={`object-contain w-full ${className}`}
      >
        {children}
      </img>
    </div>
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
