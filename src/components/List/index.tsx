import { ComponentProps } from 'react'

interface ListProps extends ComponentProps<'div'> {
  items: Array<string>
}

export const List = ({ className = '', items = [], ...rest }: ListProps) => {
  return (
    <div {...rest} className={`flex flex-col w-full gap-3 ${className}`}>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {items.map((val, idx) => (
          <li key={`List-${idx}`}>{val}</li>
        ))}
      </ul>
    </div>
  )
}
