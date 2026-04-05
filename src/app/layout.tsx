import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Navigation } from '@/components/Navigation/Navigation'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'WebDesignTheory.dev - Learn Design Systems & Principles',
  description: 'Master web design concepts from Brutalism to Swiss Design with visual examples and code snippets.',
  keywords: ['web design', 'design theory', 'brutalism', 'minimalism', 'swiss design', 'UI design', 'glassmorphism', 'neumorphism', 'cyberpunk', 'vaporwave'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-[#0a0a0a] text-zinc-50">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}