import type { Metadata } from 'next'

import './globals.css'
import {NavBar, Footer} from '@/components'



export const metadata: Metadata = {
  title: 'Cars App',
  description: 'Discover the best cars on the market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
