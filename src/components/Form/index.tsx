/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod'
import { BaseSyntheticEvent, ComponentProps, ReactNode } from 'react'
import {
  FieldErrors,
  FieldValues,
  FormProvider,
  useController,
  useForm,
  useFormContext
} from 'react-hook-form'
import { ZodType } from 'zod'
import { Input, TextArea } from '../'
import { toast } from 'react-toastify'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FormProps extends ComponentProps<'form'> {}

export const Form = ({ children, className = '', ...rest }: FormProps) => {
  return (
    <form {...rest} className={`flex flex-col gap-4 ${className}`}>
      {children}
    </form>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FormRowProps extends ComponentProps<'div'> {}

export const FormRow = ({
  children,
  className = '',
  ...rest
}: FormRowProps) => {
  return (
    <div {...rest} className={`flex justify-stretch w-full gap-6 ${className}`}>
      {children}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FormContainerProps extends ComponentProps<'div'> {}

export const FormContainer = ({
  children,
  className = '',
  ...rest
}: FormContainerProps) => {
  return (
    <div {...rest} className={`flex flex-col w-[650px] gap-6 ${className}`}>
      {children}
    </div>
  )
}

type TSubmitResponse = {
  success: boolean
  message: string
}

interface FormBaseProps {
  children: ReactNode
  resolver?: ZodType<any, FieldValues>
  onSubmit?: (data: any) => Promise<TSubmitResponse>
}

export const FormBase = ({ children, resolver, onSubmit }: FormBaseProps) => {
  const methods = useForm({ resolver: resolver && zodResolver(resolver) })
  const onValid = async (data: FieldValues, event?: BaseSyntheticEvent) => {
    event?.preventDefault()
    if (onSubmit) {
      const toastId = toast.loading('Aguarde')
      const resp = (await onSubmit(data)) || {}
      const { success, message } = resp
      if (toastId) {
        toast.update(toastId, {
          type: success ? 'success' : 'error',
          render: message,
          isLoading: false,
          autoClose: 3000
        })
      } else {
        toast(message, { type: success ? 'success' : 'error' })
      }
    }
  }
  const onInvalid = (
    errors: FieldErrors<FieldValues>,
    event?: BaseSyntheticEvent
  ) => {
    event?.preventDefault()
    console.error('errors', errors)
  }
  const handleSubmit = (data: any) => {
    methods.handleSubmit(onValid, onInvalid)(data)
  }
  return (
    <FormProvider {...methods}>
      <form className="contents bg-inherit" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  )
}

type TFormFieldSpecs = {
  name: string
  title: string
  type: string
  mask?: string
}
type TFormFieldConfig = {
  specs: TFormFieldSpecs
}
interface FormFieldProps {
  config: TFormFieldConfig
}

export const FormField = ({ config, ...rest }: FormFieldProps) => {
  const { specs } = config
  const { name, title, type, mask = '' } = specs
  const { control } = useFormContext()
  const { field, fieldState } = useController({ control, name })
  return (
    <div className="flex flex-col w-full" style={{ position: 'relative' }}>
      {type === 'textarea' ? (
        <TextArea
          {...rest}
          {...field}
          value={field.value || ''}
          name={name}
          placeholder={title}
        />
      ) : (
        <Input
          {...rest}
          {...field}
          mask={mask}
          value={field.value || ''}
          name={name}
          type={type}
          placeholder={title}
        />
      )}
      <span
        className="text-xs text-red-500 font-bold"
        style={{ position: 'absolute', bottom: '-20px', left: '4px' }}
      >
        {fieldState.error?.message}
      </span>
    </div>
  )
}
