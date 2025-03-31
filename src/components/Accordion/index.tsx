import { ComponentProps, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
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
        className="flex w-full justify-between h-[60px] p-[20px] font-bold uppercase"
        style={{
          cursor: 'pointer'
        }}
        onClick={() => {
          setOpened(!opened)
        }}
      >
        <h3>{group}</h3>
        <div className="rounded-full border-1 flex p-2 relative bg-gray-secondary">
          <span
            className="absolute text-gray-primary font-extraboldd"
            style={{ top: '-25%', left: '25%' }}
          >
            {opened ? '−' : '+'}
          </span>
        </div>
      </div>
      {opened && (
        <div className="text-left" style={{ padding: '0 20px 20px 20px' }}>
          {children}
        </div>
      )}
    </div>
  )
}
