"use client";

import NextLink from "next/link"
import { forwardRef } from "react";

const TranslateLink = forwardRef((props, ref) => {
  // lang
  // const currentLang = useTra();

  // const { t, i18n } = useTranslation("header-menu")


  // Destructure skiplangmodification from props
  const { skiplangmodification, ...restProps } = props;

  // let href
  let href = props.href;

  // modify href
  // if (!skiplangmodification) {
  //   href = insertLangIntoURL({
  //     url: href,
  //     lang: currentLang,
  //     currentLang,
  //     debug: logDebug,
  //   });
  // }
  // Helper function to get localized URL
  // const getLocalizedUrl = (url) => {
  //   return i18n.language && i18n.language !== "en" ? `/${i18n.language}${url}` : url
  // }

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
