import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ParagraphProps extends ComponentProps<'p'> {}

export const Paragraph = ({
  children,
  className = '',
  ...rest
}: ParagraphProps) => {
  return (
    <p {...rest} className={`font-semibold ${className}`}>
      {children}
    </p>
  )
}
