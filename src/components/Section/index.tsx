/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'
import { images } from '../../assets'
interface SectionProps extends ComponentProps<'section'> {
  bgImage?: string
}

export const Section = ({
  children,
  className = '',
  style = {},
  bgImage,
  ...rest
}: SectionProps) => {
  return (
    <section
      {...rest}
      className={`flex justify-center w-full ${className}`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${images[bgImage]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              ...style
            }
          : { ...style }
      }
    >
      {children}
    </section>
  )
}

interface SectionContainerProps extends ComponentProps<'div'> {}

export const SectionContainer = ({
  children,
  className = '',
  ...rest
}: SectionContainerProps) => {
  return (
    <div
      {...rest}
      className={`flex w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl h-full ${className}`}
    >
      {children}
    </div>
  )
}
