import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import { Layout } from '../components/Layout'

export default jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link href="/app/style.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="/app/client.ts" async />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
})
