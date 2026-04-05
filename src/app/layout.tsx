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
  keywords: ['web design', 'design theory', 'brutalism', 'minimalism', 'swiss design', 'UI design'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-display antialiased bg-minimalist-offwhite text-minimalist-charcoal">
        <Navigation />
        <main>{children}</main>
        <footer className="border-t border-minimalist-charcoal/10 mt-24 py-12">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-minimalist-gray">
            <p className="font-mono">© 2024 WebDesignTheory.dev — Learn. Create. Inspire.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
