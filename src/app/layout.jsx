import './globals.css'

export const metadata = {
  title: 'Jangbogo - Roblox Login Platform',
  description: 'Jangbogo project - Advanced Roblox login and management system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}