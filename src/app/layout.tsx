import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import { Inter as interFunction } from 'next/font/google'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'

const inter = interFunction({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sirice',
  description: 'Sportapp'
}

/**
 * Root Layout Function
 * @return {ReactElement} ReactElement
 */
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="marker-icon-circle.png" type="image/png" sizes="32x24" />
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
