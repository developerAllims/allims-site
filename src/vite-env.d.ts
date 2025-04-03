/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAILER_URL: string
  readonly VITE_MAILER_FROM: string
  readonly VITE_MAILER_TO: string
  readonly VITE_MAILER_SUBJECT: string
  readonly VITE_MAILER_TEXT: string
  readonly VITE_MAILER_HTML: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
