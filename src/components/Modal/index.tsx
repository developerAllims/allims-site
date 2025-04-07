/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'

interface ModalProps extends ComponentProps<'dialog'> {}

export const Modal = ({ children, open, ...rest }: ModalProps) => {
  if (!open) return <></>
  return (
    <dialog
      {...rest}
      open={open}
      className="flex justify-center items-center fixed h-[100svh] w-[100svw] z-[999] left-0 top-0"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
    >
      <div className="flex items-start w-1/2 max-w-[845px] h-fit gap-12 p-10 font-semibold bg-white text-gray-primary">
        {children}
      </div>
    </dialog>
  )
}
