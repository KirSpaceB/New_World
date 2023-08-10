import './globals.css';
import Providers from '@/components/Providers';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // We have to add overflow-y-hidden here
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
