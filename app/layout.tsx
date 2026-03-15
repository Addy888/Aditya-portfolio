import React from "react"
import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Aditya Kumar Shastri | AI & Machine Learning Engineer',
  description: 'AI & Machine Learning Engineer specializing in Deep Learning, NLP, Computer Vision, and GenAI. Building intelligent systems and production-grade AI solutions.',
  keywords: ['AI Engineer', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Python', 'TensorFlow', 'PyTorch'],
  authors: [{ name: 'Aditya Kumar Shastri' }],
  openGraph: {
    title: 'Aditya Kumar Shastri | AI & Machine Learning Engineer',
    description: 'AI & Machine Learning Engineer specializing in Deep Learning, NLP, Computer Vision, and GenAI.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased bg-background text-foreground min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
