import { I18nProvider } from "../..//i18n/client"
import MainHeader from './../../Components/MainHeader';
import MainFooter from './../../Components/MainFooter';

export const metadata = {
  title: "Prana Air - Air Quality Monitoring Solutions",
  description:
    "Prana Air provides advanced air quality monitoring solutions for homes, offices, and industrial environments.",
}

export default async function RootLayout({ children, params }) {
  // Return JSX
  return (<I18nProvider locale={params.lang}>
    {/* Header */}
    <MainHeader />

    {/* Page Content */}
    <main className="main py-4">{children}</main>
    {/* Footer */}
    <MainFooter />
  </I18nProvider>)
}