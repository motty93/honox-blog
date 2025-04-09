import { cx } from 'hono/css'
import { FC } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'

const links = [
  { href: '/articles', text: 'Articles' },
  { href: '/articles/create', text: 'Create' },
]

export const Layout: FC = ({ children }) => {
  const context = useRequestContext()
  const path = context.req.path

  return (
    <div class="w-full">
      <header class="border-b border-gray-300 px-4 py-3 flex items-center justify-between">
        <h1 class="text-xl font-bold">
          <a href="/" class="text-blue-600 hover:text-blue-900">
            HonoX Blog 🔥
          </a>
        </h1>
        <nav class="space-x-4">
          {links.map((link) => (
            <a
              href={link.href}
              class={cx(
                'px-3 py-1 rounded border border-transparent hover:bg-gray-100 transition-colors',
                path === link.href && 'bg-gray-100',
              )}
            >
              {link.text}
            </a>
          ))}
        </nav>
      </header>
      <main class="max-w-3xl mx-auto p-4">{children}</main>
    </div>
  )
}
