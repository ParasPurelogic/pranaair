import { I18nProvider } from "../..//i18n/client"
import MainHeader from './../../Components/MainHeader';
import MainFooter from './../../Components/MainFooter';
import UserInfoProvider from "../../context/UserInfo"
import getUserinfo from "@/lib/server/getUserinfo";

export const metadata = {
  title: "Prana Air - Air Quality Monitoring Solutions",
  description:
    "Prana Air provides advanced air quality monitoring solutions for homes, offices, and industrial environments.",
}

export default async function RootLayout({ children, params }) {
  // Get userInfo
  const userInfo = await getUserinfo();

  // Return JSX
  return (<I18nProvider locale={params.lang}>
    <UserInfoProvider userInfo={userInfo}>
      {/* Header */}
      <MainHeader />

      {/* Page Content */}
      <main className="main py-4">{children}</main>
      {/* Footer */}
      <MainFooter />
    </UserInfoProvider>
  </I18nProvider>)
}