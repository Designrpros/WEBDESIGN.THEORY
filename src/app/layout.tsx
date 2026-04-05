import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebDesignTheory.dev - Learn Web Design Principles',
  description: 'Master web design theory from Brutalism to Minimalism. Visual examples and code snippets included.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
