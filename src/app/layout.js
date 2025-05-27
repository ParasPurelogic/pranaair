import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import BootstrapProvider from "../Components/bootstrap-provider"

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        <BootstrapProvider>
          {children}
        </BootstrapProvider>
      </body>
    </html>
  )
}


