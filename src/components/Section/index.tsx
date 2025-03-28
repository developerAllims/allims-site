import { ComponentProps } from 'react'

interface SectionProps extends ComponentProps<'section'> {
  myHeight: number
  myImage?: string
}

export const Section = ({
  children,
  className,
  myHeight,
  myImage,
  ...rest
}: SectionProps) => {
  return (
    <section
      {...rest}
      //className={`flex justify-center w-full items-center bg-orange-primary h-[${myHeight}px] min-h-[${myHeight}px] ${className}`}
      className={`flex w-full h-[${myHeight}px] min-h-[${myHeight}px] min-h-60 ${className}`}
      style={
        myImage
          ? {
              backgroundImage: `url(${myImage})`,
              backgroundSize: 'cover'
            }
          : {}
      }
    >
      <SectionContainer>{children}</SectionContainer>
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
    <div {...rest} className="flex w-full max-w-5xl h-full">
      {children}
    </div>
  )
}
