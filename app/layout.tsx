import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OceanDepthEffect from '@/components/OceanDepthEffect'
import DepthGradient from '@/components/DepthGradient'
import WaveOverlay from '@/components/WaveOverlay'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Praveen Hatchery - Premium Vannamei Shrimp Seed | Quality You Can Trust',
  description: 'Praveen Hatchery delivers premium SPF shrimp seed through scientific breeding, quality assurance, and sustainable aquaculture practices. CAA Regd: 56-9(80)/2018',
  keywords: 'vannamei hatchery, shrimp seed, aquaculture, SPF post larvae, prawn hatchery, Andhra Pradesh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Ocean depth effects */}
        <WaveOverlay />
        <DepthGradient />
        <OceanDepthEffect />
        
        {/* Main content */}
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
