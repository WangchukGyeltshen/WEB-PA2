import './globals.css'
import MainLayout from '@/components/layout/MainLayout'

export const metadata = {
  title: 'Snapchat Clone',
  description: 'Snapchat-inspired UI built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
