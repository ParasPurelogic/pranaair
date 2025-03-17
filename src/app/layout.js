import "@/app/globals.css" // Custom CSS
import "bootstrap/dist/css/bootstrap.min.css" // Bootstrap CSS
import Footer from "@/Components/Footer"
import Header from "@/Components/Header"
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
        <Header />

        {/* Page Content */}
        <main className="main py-4">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}

