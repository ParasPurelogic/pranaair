import type { InitOptions } from "i18next"

export const languages = ["en", "hi"]
export const fallbackLng = "en"
export const defaultNS = "common"

export function getOptions(locale = fallbackLng, ns = defaultNS): InitOptions {
  return {
    debug: process.env.NODE_ENV === "development",
    supportedLngs: languages,
    fallbackLng,
    lng: locale,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
