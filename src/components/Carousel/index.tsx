import { ComponentProps, Dispatch, SetStateAction, useState } from 'react'
import { Paragraph } from '../Paragraph'

type TTestimonial = {
  text: string
  name: string
  role: string
}

interface CarouselTestimonialsProps extends ComponentProps<'div'> {
  items: Array<TTestimonial>
}

export const CarouselTestimonials = ({
  items = []
}: CarouselTestimonialsProps) => {
  const [index, setIndex] = useState(0)
  const { text, name, role } = items[index] || {}
  // const [hoverL, setHoverL] = useState(false)
  // const [hoverR, setHoverR] = useState(false)
  return (
    <div className="flex text-white">
      <CarouselButton
        index={index}
        isLeft={true}
        items={items}
        setIndex={setIndex}
      />
      <div className="flex flex-col gap-1 w-full h-[320px] items-center justify-center">
        <Paragraph className="text-lg text-white">{text}</Paragraph>
        <Paragraph className="text-[23px] text-white">
          <strong>{name}</strong>
        </Paragraph>
        <Paragraph className="text-lg text-orange-primary">{role}</Paragraph>
      </div>
      <CarouselButton
        index={index}
        isLeft={false}
        items={items}
        setIndex={setIndex}
      />
    </div>
  )
}

interface CarouselButtonProps extends ComponentProps<'div'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Array<any>
  index: number
  isLeft: boolean
  setIndex: Dispatch<SetStateAction<number>>
}

export const CarouselButton = ({
  items = [],
  index = 0,
  isLeft = true,
  setIndex
}: CarouselButtonProps) => {
  const [hover, setHover] = useState(false)
  return (
    <div className="flex" style={{ opacity: `${hover ? '100%' : '0'}` }}>
      <button
        className={`flex w-[100px] h-full items-center ${
          isLeft ? 'justify-start' : 'justify-end'
        }`}
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}
        onClick={() => {
          setIndex(
            isLeft
              ? index === 0
                ? items.length - 1
                : index - 1
              : index === items.length - 1
              ? 0
              : index + 1
          )
        }}
      >
        <span
          className="text-[30px] font-bold"
          style={{
            padding: `${hover ? (isLeft ? '0 0 0 20px' : '0 20px 0 0') : '0'}`
          }}
        >
          {isLeft ? '❮' : '❯'}
        </span>
      </button>
    </div>
  )
}
