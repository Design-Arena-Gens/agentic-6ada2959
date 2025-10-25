export const metadata = {
  title: 'Anime Bike Cleaner - Honda 350cc',
  description: 'Dragon Ball Z inspired anime character cleaning his Honda 350cc motorcycle',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
