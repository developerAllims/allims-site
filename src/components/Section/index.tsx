import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SectionProps extends ComponentProps<'section'> {}

export const Section = ({ children, ...rest }: SectionProps) => {
  return <section {...rest}>{children}</section>
}
