declare global {
  interface ImportMetaEnv {
    readonly VITE_CONTACT_FORM_ENDPOINT: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};