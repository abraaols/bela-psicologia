import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Bela Psicologia — Um espaço para entender emoções e a si mesma',
  description:
    'Gabriela Bela compartilha reflexões, artigos e conteúdos sobre psicologia, emoções, autoconhecimento, relacionamentos e saúde emocional de forma leve e acolhedora.',
  keywords: [
    'psicologia',
    'autoconhecimento',
    'emoções',
    'saúde emocional',
    'relacionamentos',
    'ansiedade',
    'reflexões',
  ],
  authors: [{ name: 'Gabriela Bela' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Bela Psicologia',
    description: 'Um espaço para entender emoções, relações e a si mesma.',
    type: 'website',
    url: 'https://belapsi.com.br',
    siteName: 'Bela Psicologia',
    images: [
      {
        url: 'https://belapsi.com.br/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bela Psicologia — Um espaço para entender emoções e a si mesma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bela Psicologia',
    description: 'Um espaço para entender emoções, relações e a si mesma.',
    images: ['https://belapsi.com.br/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#f7f3ee',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
