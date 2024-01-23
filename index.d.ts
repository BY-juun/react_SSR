export {};

declare global {
  interface Window {
    __PRELOADED_STATE__: Partial<{ articles: {} | undefined }>;
  }
}
