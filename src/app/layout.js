import "@/app/globals.css" // Custom CSS
import "bootstrap/dist/css/bootstrap.min.css" // Bootstrap CSS
import MainHeader from "@/Components/MainHeader"
import MainFooter from "@/Components/MainFooter"
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: "Prana Air - Air Quality Monitoring Solutions",
  description:
    "Prana Air provides advanced air quality monitoring solutions for homes, offices, and industrial environments.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
       <MainHeader/>

        {/* Page Content */}
        <main className="main py-4">{children}</main>

        {/* Footer */}
        <MainFooter />
      </body>
    </html>
  )
}

