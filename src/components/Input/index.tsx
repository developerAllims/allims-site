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
  return mask ? (
    <input
      {...rest}
      ref={inputRef}
      className={`border-3 p-3 w-full placeholder:font-semibold placeholder-white ${className}`}
      style={{
        border: '3px solid var(--color-orange-primary)',
        color: 'var(--color-white)',
        fontWeight: '500',
        outline: 'none'
      }}
    />
  ) : (
    <input
      {...rest}
      className={`border-3 p-3 w-full placeholder:font-semibold placeholder-white ${className}`}
      style={{
        border: '3px solid var(--color-orange-primary)',
        color: 'var(--color-white)',
        fontWeight: '500',
        outline: 'none'
      }}
    />
  )
}
