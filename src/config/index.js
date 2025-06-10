// Define supported languages
export const supportedLanguages = ["en", "hi"];

// Default Language
export const defaultLanguage = "en"

// Domain
export const domain = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "https://dev.pranaair.com";
