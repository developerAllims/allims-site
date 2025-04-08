/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps, useState } from 'react'

interface AccordionProps extends ComponentProps<'div'> {}

export const Accordion = ({
  children,
  className = '',
  ...rest
}: AccordionProps) => {
  return (
    <div {...rest} className={`flex flex-col w-full gap-3 ${className}`}>
      {children}
    </div>
  )
}

interface AccordionItemProps extends ComponentProps<'div'> {
  group: string
}

export const AccordionItem = ({
  children,
  className = '',
  group,
  ...rest
}: AccordionItemProps) => {
  const [opened, setOpened] = useState(false)
  return (
    <div
      {...rest}
      className={`flex flex-col w-full bg-gray-primary text-white ${className}`}
    >
      <div
        className="flex w-full justify-between h-[60px] p-[20px] font-bold uppercase cursor-pointer"
        onClick={() => {
          setOpened(!opened)
        }}
      >
        <h3>{group}</h3>
        <div className="rounded-full border-1 flex p-2 relative bg-gray-secondary">
          <span className="absolute text-gray-primary font-extrabold top-[-25%] left-[25%]">
            {opened ? '−' : '+'}
          </span>
        </div>
      </div>
      <div
        className={`text-left ${opened ? 'pt-0 pb-5 px-5 h-auto' : 'p-0 h-0'}`}
      >
        {opened && children}
      </div>
    </div>
  )
}
