"use client"
import { useEffect, useState } from "react"
import i18next from "i18next"
import { initReactI18next, useTranslation as useTranslationOrg } from "react-i18next"
import resourcesToBackend from "i18next-resources-to-backend"
import { getOptions, languages } from "./settings"

const runsOnServerSide = typeof window === "undefined"

// Initialize i18next for client side
i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language, namespace) => import(`./${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ["cookie"],
    },
    preload: runsOnServerSide ? languages : [],
  })

export function useTranslation(ns = "common") {
  const ret = useTranslationOrg(ns)
  const { i18n } = ret

  // Run when mounted on client
  useEffect(() => {
    if (!runsOnServerSide && i18n.resolvedLanguage !== i18n.language) {
      i18n.changeLanguage(i18n.language)
    }
  }, [i18n])

  return ret
}

export function I18nProvider({
  children,
  locale,
}) {
  const [mounted, setMounted] = useState(false)

  // Run when mounted on client
  useEffect(() => {
    if (i18next.language !== locale) {
      i18next.changeLanguage(locale)
    }
    setMounted(true)
  }, [locale])

  // When rendering on the server, we don't want to use the client's locale
  if (!mounted && runsOnServerSide) {
    return <>{children}</>
  }

  return <>{children}</>
}
