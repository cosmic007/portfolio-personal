import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Abhijith V A - Software Engineer | Portfolio & Blog',
  description: 'Software Engineer specializing in Java, Spring Boot, and cloud technologies. Explore my projects and technical insights.',
  keywords: ['Abhijith V A', 'Software Engineer', 'Java Developer', 'Spring Boot', 'Cloud Technologies', 'Portfolio', 'Blog'],
  authors: [{ name: 'Abhijith V A', url: 'https://abhijithva.in' }],
  icons: {
    icon: [
      {
        url: '/icons8-dev-32-white.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icons8-dev-windows-10-32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icons8-dev-windows-10-32.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icons8-dev-windows-10-32.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
