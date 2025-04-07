/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

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
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
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
    <div {...rest} className={`flex w-full max-w-5xl h-full ${className}`}>
      {children}
    </div>
  )
}
