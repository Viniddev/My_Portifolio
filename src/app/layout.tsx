import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight:['400','500','600'] })

export const metadata: Metadata = {
  title: 'Vinícius Dias',
  description: 'Vinícius Dias is a software enginier and frelancer at Brazil. Im aways trying new technologies and open to learn.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
