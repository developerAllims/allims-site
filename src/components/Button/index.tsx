import { ComponentProps, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Button1Props extends ComponentProps<'a'> {}

export const Button1 = ({ children }: Button1Props) => {
  const [hover, setHover] = useState(false)
  return (
    <div>
      <a
        className="bg-orange-primary text-white font-semibold text-lg max-w-max px-[1em] py-[0.4em] rounded-[3px] button-hover"
        style={hover ? { padding: '0.4em 1.2em 0.4em 0.7em' } : {}}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        {`${children}${hover ? '  ❯' : ''}`}
      </a>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Button2Props extends ComponentProps<'a'> {}

export const Button2 = ({ children }: Button2Props) => {
  const [hover, setHover] = useState(false)
  return (
    <div>
      <a
        className="border-2 text-white font-semibold text-lg max-w-max rounded-[3px] px-[1em] py-[0.4em] button-hover"
        style={hover ? { padding: '0.4em 1.2em 0.4em 0.7em' } : {}}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        {`${children}${hover ? '  ❯' : ''}`}
      </a>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Button3Props extends ComponentProps<'a'> {}

export const Button3 = ({ children }: Button3Props) => {
  const [hover, setHover] = useState(false)
  return (
    <div className="flex justify-end">
      <a
        className="bg-orange-primary text-white font-semibold text-lg max-w-max rounded-[3px] px-[1em] py-[0.4em] button-hover"
        style={hover ? { padding: '0.4em 1.2em 0.4em 0.7em' } : {}}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        <button type="submit">{`${children}${hover ? '  ❯' : ''}`}</button>
      </a>
    </div>
  )
}
