// The reconstructed site components are authored in JSX; declare their shapes
// so the TypeScript routes can import them.
declare module "@/lib/i18n" {
  export const pt: any;
  export const en: any;
  export const dictionaries: any;
  export function LanguageProvider(props: { children?: any }): any;
  export function useLang(): any;
}

declare module "@/lib/theme" {
  export function ThemeProvider(props: { children?: any }): any;
  export function useTheme(): any;
}

declare module "@/lib/useReveal" {
  export function useReveal(threshold?: number): { ref: any; isVisible: boolean };
}

declare module "@/components/SiteContent" {
  export function SiteContent(): any;
}
