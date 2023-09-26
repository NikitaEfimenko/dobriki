/* eslint-disable import/no-default-export */
import { z } from "zod"

const envVariables = z.object({
  NEXTAUTH_URL: z.url(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_BACKEND_URL: z.url(),
  NEXT_PUBLIC_BACKEND_URL: z.url(),
  PUBLIC_URL: z.url()
})

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {
    }
  }

  interface Window {

  }

  declare module '*.png' {
    const src: string;
    export default src;
  }

  declare module '*.ttf' {
    const src: string;
    export default src;
  }

  declare module '*.ttf' {
    const src: string;
    export default src;
  }

  declare module '*.eot' {
    const src: string;
    export default src;
  }

  declare module '*.woff' {
    const src: string;
    export default src;
  }

  declare module '*.woff2' {
    const src: string;
    export default src;
  }

  declare module '*.svg' {
    import { FunctionComponent, SVGProps } from 'react';

    export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

    const src: string;
    export default src;
  }
}

export {};
