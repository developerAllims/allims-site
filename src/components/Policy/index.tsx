import { useCallback } from 'react'
import { policies, docs } from '../../assets'
import { ButtonLink, ButtonSimple } from '../Button'
import { useCookies } from 'react-cookie'

export const Policy = () => {
  const { name, doc, text, button } = policies
  const cookieName = 'allims-site-policy'
  const [cookies, setCookie] = useCookies([cookieName])
  const handleClick = useCallback(() => {
    setCookie(cookieName, true)
  }, [setCookie])
  if (cookies[cookieName] === true) return <></>
  return (
    <div className="flex flex-col md:flex-row justify-between items-center fixed left-1/10 bottom-12 min-h-16 w-8/10 p-3 gap-3 border-2 border-white rounded-md bg-gray-primary">
      <div className="flex">
        <ButtonLink
          title={name}
          to={docs[doc]}
          target="_blank"
          className="bg-orange-primary text-white font-bold text-center"
          showArrow={false}
        />
      </div>
      <div className="flex">
        <span className="text-white text-justify font-semibold">{text}</span>
      </div>
      <div className="flex justify-end w-full md:w-fit">
        <ButtonSimple
          title={button}
          className="bg-orange-primary text-white font-bold"
          showArrow={false}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
