import { getCookie } from 'hono/cookie'
import { createRoute } from 'honox/factory'
import Counter from '../islands/Counter'

const COOKIE_NAME = 'counterValue'

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  const initialCount = Number.parseInt(getCookie(c, COOKIE_NAME) ?? '0', 10)

  return c.render(
    <div class="py-8 text-center">
      <title>{name}</title>
      <h1 class="text-3xl font-bold">Hello, {name}!</h1>
      <Counter initialCount={initialCount} />
    </div>,
  )
})
