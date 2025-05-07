import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        {children}
      </body>
    </html>
  )
}


