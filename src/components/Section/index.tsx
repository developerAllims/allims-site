/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'
import { images } from '../../assets'
import { PageContainer } from '../../components'
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
    <PageContainer {...rest} className={`h-full ${className}`}>
      {children}
    </PageContainer>
  )
}
