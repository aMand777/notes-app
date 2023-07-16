import "./globals.css"
import { Inter } from "next/font/google"
import { StoreProvider } from "./context/store"
import AuthProvider from "./context/auth"
import NotesProvider from "./context/notes"
import UsersProvider from "./context/users"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Home Page",
  description: "Notes App Home Page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <AuthProvider>
            <UsersProvider>
              <NotesProvider>
              {children}
              </NotesProvider>
            </UsersProvider>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
