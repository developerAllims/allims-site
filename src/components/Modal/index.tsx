/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps } from 'react'
import { ButtonIcon } from '../Button'

interface ModalProps extends ComponentProps<'dialog'> {
  title: string
}

export const Modal = ({ children, open, title, ...rest }: ModalProps) => {
  if (!open) return <></>
  return (
    <dialog
      {...rest}
      open={open}
      className="flex justify-center items-center fixed h-[100svh] w-[100svw] z-[999] left-0 top-0 bg-[rgba(0,0,0,0.4)]"
    >
      <div className="flex flex-col w-4/5 lg:w-2/3 max-w-[845px] h-fit max-h-[80svh] gap-6 p-7 font-semibold bg-white text-gray-primary rounded-[3px]">
        <div className="flex justify-between">
          <ButtonIcon
            icon="CiCircleChevLeft"
            title="Voltar"
            classContainer="justify-start"
          />
          <h3 className="text-2xl font-bold text-gray-primary">{title}</h3>
          <span> </span>
        </div>
        <div className="flex gap-6 items-start h-fit content-stretch overflow-auto text-justify">
          {children}
        </div>
      </div>
    </dialog>
  )
}

interface ModalContainerProps extends ComponentProps<'div'> {}

export const ModalContainer = ({ children, ...rest }: ModalContainerProps) => {
  if (!open) return <></>
  return (
    <div {...rest} className="flex flex-col gap-6 p-2 bg-gray-secondary">
      {children}
    </div>
  )
}
