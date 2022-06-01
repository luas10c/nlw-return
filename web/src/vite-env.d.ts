/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_EXEMPLE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}