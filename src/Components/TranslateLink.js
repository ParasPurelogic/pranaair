"use client";

import { defaultLanguage, domain } from "@/config";
import { useTranslation } from "@/i18n/client";
import NextLink from "next/link"
import { forwardRef } from "react";

const TranslateLink = forwardRef((props, ref) => {
  // lang
  const { i18n } = useTranslation();

  // Destructure skiplangmodification from props
  const { skiplangmodification, ...restProps } = props;

  // let href
  let href = props.href;

  // modify href
  if (!skiplangmodification) {
    href = insertLangIntoURL(href, i18n.language);
  }

  // Return JSX
  return (
    <NextLink
      {...restProps}
      href={href}
      ref={ref}
    >
      {props.children}
    </NextLink>
  );
});

TranslateLink.displayName = "TranslateLink";

export default TranslateLink;


function insertLangIntoURL(url = "", locale = "") {
  const argsUrl = url?.includes?.(domain) ? url : `${domain}${url}`

  // if default lang, return
  if (locale == defaultLanguage) return argsUrl

  // if home url
  if (argsUrl == domain) {
    return `${domain}/${locale}`
  }

  // let url obj
  let urlObj = (() => {
    try {
      return new URL(argsUrl);
    } catch (error) {
      console.log("INSERT_LANG_INTO_URL_ERROR", {
        insertLangError: error.message,
        url,
        argsUrl,
        locale,
      });
      return new URL(domain + (argsUrl.startsWith("/") ? argsUrl : "/" + argsUrl));
    }
  })();


  // pure href
  const pureHref = urlObj.href.replace(
    new RegExp(`/${locale}/`, "g"),
    "/"
  )

  // new pathname
  const splittedPathname = pureHref.split?.(domain
  ).filter((e) => e.length > 2);

  // Return
  return `${domain}/${locale}${splittedPathname}`
    // Ensure no multi "/"
    .replace(/([^:]\/)\/+/g, "$1")
    // No "/" at the end
    .replace?.(/\/+$/, "")
};
