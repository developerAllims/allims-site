import { Helmet } from 'react-helmet'
import { useLanguage } from '../../hooks'
import { useCallback } from 'react'

import { languages } from '../../hooks'

/* eslint-disable @typescript-eslint/no-explicit-any */
interface LanguageSelectProps {
  lang: string
  setLang: any
}

export const LanguageSelect = ({ lang, setLang }: LanguageSelectProps) => {
  const { VITE_LANGS_SHOW } = import.meta.env

  const handleChange = useCallback(
    (e: any) => {
      setLang(e.target.value)
    },
    [setLang]
  )

  const classes = 'checked:bg-blue-primary hover:bg-gray-secondary'

  return (
    <>
      {VITE_LANGS_SHOW === 'true' ? (
        <div className="flex h-auto w-18 items-center justify-center hover:bg-gray-secondary">
          <select
            defaultValue={lang}
            onChange={handleChange}
            className={`lang-flags h-full min-h-9 w-12 ${classes}`}
          >
            {languages.map(({ id, name, flag }, idx) => (
              <option
                key={`lang-${id}-${idx}`}
                value={id}
                className={`${classes}`}
              >
                {flag}
                {'   '}
                {name}
              </option>
            ))}
          </select>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export const LanguageHelmet = () => {
  const { language } = useLanguage()

  return <Helmet htmlAttributes={{ lang: language }} />
}
