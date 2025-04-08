import { useMask } from '@react-input/mask'
import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  mask?: string
}

export const Input = ({ className = '', mask = '', ...rest }: InputProps) => {
  const inputRef = useMask({
    mask,
    replacement: { _: /\d/ }
  })
  const classes = `border-3 p-3 w-full font-semibold placeholder:font-semibold border-orange-primary placeholder-white text-white ${className}`
  return mask ? (
    <input {...rest} ref={inputRef} className={classes} />
  ) : (
    <input {...rest} className={classes} />
  )
}
