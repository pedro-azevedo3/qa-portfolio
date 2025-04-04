import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pedro Azevedo',
  description: 'QA Portifolio',
  generator: 'v0.dev',
  icons: {
    icon: '/favico.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
