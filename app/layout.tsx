import type { Metadata, Viewport } from 'next'
import { Poppins, Fira_Code } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'Gayathridevi E | Portfolio',
  description:
    'Personal portfolio of Gayathridevi E — Computer Science Engineering Student at Government College of Engineering, Bodinayakanur.',
}

export const viewport: Viewport = {
  themeColor: '#0f1924',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
