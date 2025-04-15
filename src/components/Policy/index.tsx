import { useCallback } from 'react'
import { appConfig, docs } from '../../assets'
import { ButtonLink, ButtonSimple } from '../Button'
import { useCookies } from 'react-cookie'
import { useLanguage, useTranslator } from '../../hooks'

export const Policy = () => {
  const t = useTranslator()
  const { policies } = appConfig
  const { name, text, button } = policies

  const { language } = useLanguage()
  const { privacyPolicy } = docs[language]

  const cookieName = 'allims-site-policy'
  const [cookies, setCookie] = useCookies([cookieName])
  const handleClick = useCallback(() => {
    const cookieOptions = { maxAge: 60 * 60 * 24 * 365 }
    setCookie(cookieName, true, cookieOptions)
  }, [setCookie])

  if (cookies[cookieName] === true) return <></>
  return (
    <div className="flex flex-col md:flex-row justify-between items-center fixed left-1/10 z-97 bottom-12 min-h-16 w-8/10 p-3 gap-3 border-2 border-white rounded-md bg-gray-primary">
      <div className="flex">
        <ButtonLink
          title={t[name]}
          to={privacyPolicy}
          target="_blank"
          className="bg-gray-primary text-orange-primary border-2 border-orange-primary font-bold text-center"
          showArrow={false}
        />
      </div>
      <div className="flex">
        <span className="text-white text-justify font-semibold">{t[text]}</span>
      </div>
      <div className="flex justify-end w-full md:w-fit">
        <ButtonSimple
          title={t[button]}
          className="bg-orange-primary text-white font-bold"
          showArrow={false}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
