import { I18nProvider } from "@/i18n/client"
import MainHeader from "@/Components/MainHeader"
import MainFooter from "@/Components/MainFooter"
import UserInfoProvider from "@/context/UserInfo"
import getUserInfo from '@/lib/server/getUserinfo'

import { CartProvider } from "@/context/CartContext"

export const metadata = {
  title: "Prana Air - Air Quality Monitoring Solutions",
  description: "Prana Air provides advanced air quality monitoring solutions for homes, offices, and industrial environments.",
}

export default async function RootLayout({ children, params }) {
  const userInfo = await getUserInfo()

  return (
    <I18nProvider locale={params.lang}>
      <UserInfoProvider userInfo={userInfo}>
        <CartProvider>
          <MainHeader />
          <main className="main py-4">{children}</main>
          <MainFooter />
        </CartProvider>
      </UserInfoProvider>
    </I18nProvider>
  )
}
