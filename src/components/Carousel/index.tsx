/* eslint-disable @typescript-eslint/no-explicit-any */
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
  return (
    <div className="flex w-full text-white">
      <CarouselButton
        index={index}
        isLeft={true}
        items={items}
        setIndex={setIndex}
      />
      <div className="flex flex-col gap-1 w-full h-full lg:h-[450px] items-center justify-center">
        <Paragraph className="text-lg text-white">{text}</Paragraph>
        <Paragraph className="p-5 text-[23px] text-white">
          <strong>{name}</strong>
        </Paragraph>
        <Paragraph className="p-0 text-lg text-orange-primary">
          {role}
        </Paragraph>
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
  return (
    <div
      className={`flex ${
        '' //opacity-0 hover:opacity-100
      }`}
    >
      <button
        className={`flex w-[80px] lg:w-[100px] h-full items-center ${
          isLeft ? 'justify-start' : 'justify-end'
        }`}
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
          className={`flex items-center justify-center text-4xl font-bold w-full h-full py-0 ${
            '' //isLeft ? 'hover:pl-5 hover:pr-0' : 'hover:pl-0 hover:pr-5'
          }`}
        >
          {isLeft ? '❮' : '❯'}
        </span>
      </button>
    </div>
  )
}
