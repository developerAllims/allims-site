import { ComponentProps } from 'react'

interface SectionProps extends ComponentProps<'section'> {
  bgImage?: string
}

export const Section = ({
  children,
  className,
  bgImage,
  ...rest
}: SectionProps) => {
  return (
    <section
      {...rest}
      className={`flex justify-center w-full min-h-60 ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover'
      }}
    >
      {children}
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SectionContainerProps extends ComponentProps<'div'> {}

export const SectionContainer = ({
  children,
  ...rest
}: SectionContainerProps) => {
  return (
    <div {...rest} className={`flex w-full max-w-5xl h-full`}>
      {children}
    </div>
  )
}
