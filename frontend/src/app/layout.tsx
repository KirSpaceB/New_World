import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // We have to add overflow-y-hidden here
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
