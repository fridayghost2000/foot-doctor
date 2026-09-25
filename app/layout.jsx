import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'Foot Doctor of Delray | Podiatry & Foot Care',
  description: 'Personalized, comprehensive podiatric care in Delray Beach, Florida.',
}

export const viewport = { colorScheme: 'light', themeColor: '#f8faf6' }

export default function RootLayout({ children }) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
