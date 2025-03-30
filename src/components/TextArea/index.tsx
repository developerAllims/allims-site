import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TextAreaProps extends ComponentProps<'textarea'> {}

export const TextArea = ({
  children,
  className = '',
  ...rest
}: TextAreaProps) => {
  return (
    <textarea
      {...rest}
      className={`border-3 p-3 text-orange-primary placeholder-white min-h-[150px] placeholder:font-semibold ${className}`}
    >
      {children}
    </textarea>
  )
}
