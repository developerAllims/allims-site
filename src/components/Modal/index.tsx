/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps, useCallback } from 'react'
import { ButtonIcon } from '../Button'
import { useLanguage } from '../../hooks'
import { dataSource } from '../../assets'

interface ModalProps extends ComponentProps<'dialog'> {
  title: string
  modalClose: any
}

export const Modal = ({
  children,
  open,
  modalClose,
  title,
  ...rest
}: ModalProps) => {
  const { language } = useLanguage()
  const { modules } = dataSource(language)
  const { back } = modules
  const handleClick = useCallback((event: any) => {
    event.preventDefault()
    event.stopPropagation()
  }, [])
  const handleClose = useCallback(() => {
    modalClose()
  }, [modalClose])

  if (!open) return <></>
  return (
    <dialog
      {...rest}
      open={open}
      className="flex justify-center items-center fixed h-[100svh] w-[100svw] z-[999] left-0 top-0 bg-[rgba(0,0,0,0.4)]"
    >
      <div
        className="flex flex-col w-4/5 lg:w-2/3 max-w-[845px] h-fit max-h-[80svh] gap-6 p-7 font-semibold bg-white text-gray-primary rounded-[3px]"
        onClick={handleClick}
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between">
          <ButtonIcon
            icon="CiCircleChevLeft"
            title={back}
            classContainer="justify-start"
            onClick={handleClose}
          />
          <h3 className="text-2xl text-center sm:text-right font-bold text-gray-primary">
            {title}
          </h3>
          <span className="hidden md:block"> </span>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-start h-fit content-stretch overflow-auto text-justify">
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
