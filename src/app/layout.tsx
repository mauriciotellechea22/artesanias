import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Sandra Artesana | Hecho a mano en Montevideo',
  description: 'Pirograbados personalizados, materas de madera y arte uruguayo auténtico.',
  keywords: ['artesania', 'uruguay', 'pirograbado', 'madera', 'futbol', 'montevideo'],
  manifest: '/manifest.json',
  themeColor: '#3E2723',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Sandra Artesana',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-wood-light dark:bg-charcoal text-wood-dark dark:text-cream font-sans selection:bg-wood-accent selection:text-white antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
