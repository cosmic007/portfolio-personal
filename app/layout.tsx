import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Abhijith V A - Software Engineer | Java | Spring Boot | Cloud',
  description: 'Software Engineer specializing in Java, Spring Boot, Oracle Cloud Infrastructure, CI/CD pipelines, and enterprise application development. Experienced in production deployments, DevOps, and scalable systems. Check out my projects and technical insights.',
  keywords: [
    'Abhijith V A',
    'Software Engineer',
    'Java Developer',
    'Spring Boot Developer',
    'Oracle Cloud',
    'DevOps Engineer',
    'Cloud Technologies',
    'Enterprise Applications',
    'CI/CD Pipelines',
    'Production Support',
    'Portfolio',
    'Blog',
    'Technical Articles',
    'Trivandrum',
    'India',
  ],
  authors: [{ name: 'Abhijith V A', url: 'https://abhijithva.in' }],
  creator: 'Abhijith V A',
  publisher: 'Abhijith V A',
  metadataBase: new URL('https://abhijithva.in'),
  alternates: {
    canonical: 'https://abhijithva.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhijithva.in',
    siteName: 'Abhijith V A - Software Engineer',
    title: 'Abhijith V A - Software Engineer | Java | Spring Boot | Cloud',
    description: 'Software Engineer specializing in Java, Spring Boot, Oracle Cloud Infrastructure, CI/CD pipelines, and enterprise application development.',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 1200,
        alt: 'Abhijith V A Profile',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhijith V A - Software Engineer',
    description: 'Software Engineer specializing in Java, Spring Boot, and cloud technologies.',
    images: ['/images/profile.jpg'],
    creator: '@abhijithva',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Update with actual verification code
  },
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
    <html lang="en" className="dark">
      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased">
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
