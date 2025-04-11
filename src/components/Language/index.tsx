/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react'

interface LanguageSelectProps {
  lang: string
  setLang: any
}

export const LanguageSelect = ({ lang, setLang }: LanguageSelectProps) => {
  const langs = [
    { id: 'pt', name: 'Português', flag: '🇧🇷' },
    { id: 'en', name: 'English', flag: '🇺🇸' },
    { id: 'es', name: 'Español', flag: '🇪🇸' }
  ]

  const handleClick = useCallback(
    (id: string) => {
      setLang(id)
    },
    [setLang]
  )

  const classes = 'checked:bg-blue-primary hover:bg-gray-secondary'

  return (
    <div className="flex h-auto w-18 items-center justify-center hover:bg-gray-secondary">
      <select
        defaultValue={lang}
        className={`lang-flags h-full min-h-9 w-12 ${classes}`}
      >
        {langs.map(({ id, name, flag }, idx) => (
          <option
            key={`lang-${id}-${idx}`}
            value={id}
            className={`${classes}`}
            onClick={() => {
              handleClick(id)
            }}
          >
            {flag}
            {'   '}
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}
