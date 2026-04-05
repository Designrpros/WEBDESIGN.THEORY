import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
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
        <header className="sticky top-0 z-50 bg-minimalist-offwhite/80 backdrop-blur-sm border-b border-minimalist-charcoal/10">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-black tracking-tighter uppercase">
              WebDesign<span className="text-swiss-red">.</span>Theory
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide uppercase">
              <a href="/brutalism" className="hover:text-swiss-red transition-colors">Brutalism</a>
              <a href="/minimalism" className="hover:text-swiss-red transition-colors">Minimalism</a>
              <a href="/swiss" className="hover:text-swiss-red transition-colors">Swiss Design</a>
              <a href="/principles" className="hover:text-swiss-red transition-colors">Principles</a>
            </div>
          </nav>
        </header>
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
