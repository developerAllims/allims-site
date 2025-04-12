/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'
import { dataSource } from '../../assets'

export const languages = [
  { id: 'pt', name: 'Português', flag: '🇧🇷' },
  { id: 'en', name: 'English', flag: '🇺🇸' },
  { id: 'es', name: 'Español', flag: '🇪🇸' }
]

interface LanguageContextProps {
  language: string
  setLanguage: Dispatch<SetStateAction<string>>
}

const defaultValue: LanguageContextProps = {
  language: 'pt',
  setLanguage: () => {}
}

const LanguageContext = createContext(defaultValue)

interface LanguageProviderProps {
  children: any
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState('pt')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

export const useTranslator: any = () => {
  const { language } = useLanguage()
  return dataSource(language)
}
