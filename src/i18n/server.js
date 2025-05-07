import { createInstance } from "i18next"
import resourcesToBackend from "i18next-resources-to-backend"
import { initReactI18next } from "react-i18next/initReactI18next"
import { cookies } from "next/headers"
import { getOptions, fallbackLng } from "./settings"

export async function getServerTranslation(ns = "common", options = {}) {
  const cookiesList = await cookies()

  // Try to get language from cookie or accept-language header
  const cookieLang = cookiesList.get("i18next")?.value

  // Determine language - prioritize cookie, then accept-language header
  const lng = cookieLang || fallbackLng

  // Create a new i18next instance for this request
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace) => import(`./${language}/${namespace}.json`)))
    .init({
      ...getOptions(lng, ns),
      ...options,
    })

  return {
    t: i18nInstance.getFixedT(lng, ns, options.keyPrefix),
    i18n: i18nInstance,
    locale: lng,
  }
}
