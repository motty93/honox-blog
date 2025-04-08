import { css, cx } from 'hono/css'
import { FC } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'

const className = css``

const headerClass = css`
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
`

const titleClass = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`

const navClass = css`
  display: flex;
  gap: 1rem;
`

const linkClass = css`
  &:hover {
    background-color: #f4f4f4;
  }
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #262626;
  border-radius: 3px;
`

const activeLinkClass = css`
  background-color: #f4f4f4;
`

const containerClass = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`

const links = [
  { href: '/articles', text: 'Articles' },
  { href: '/articles/create', text: 'Create' },
]

export const Layout: FC = ({ children }) => {
  const context = useRequestContext()
  const path = context.req.path

  return (
    <div class={className}>
      <header class={headerClass}>
        <h1 class={titleClass}>
          <a href="/" class={linkClass}>
            {' '}
            HonoX Blog 🔥
          </a>
        </h1>
        <nav class={navClass}>
          {links.map((link) => (
            <a href={link.href} class={cx(linkClass, path === link.href && activeLinkClass)}>
              {link.text}
            </a>
          ))}
        </nav>
      </header>
      <main class={containerClass}>{children}</main>
    </div>
  )
}
