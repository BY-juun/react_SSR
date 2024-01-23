import { MovieType } from "./src/types";

export {};

declare global {
  interface Window {
    __PRELOADED_STATE__: Partial<{ movie: MovieType }>;
  }
}
