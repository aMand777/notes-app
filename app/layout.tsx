import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/templates/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home Page',
  description: 'Notes App Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  )
}
