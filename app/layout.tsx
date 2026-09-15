import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Workforce Signal — HR Analytics', description: 'Interactive workforce intelligence and attrition risk dashboard.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
    
