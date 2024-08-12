import { Metadata } from "next"
import Navbar from "../../public/comp/Navbar"
import Footer from "../../public/comp/Footer"
import "./styles/globals.css";
// import {
//   ClerkProvider} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: { 
    default: 'Remedic', 
    template: '%s | Remedic' 
  },
  description: 'Powered by Remedic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
          </body>
      </html>
    // </ClerkProvider>

  )
}
