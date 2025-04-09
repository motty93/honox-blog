import { useState } from 'hono/jsx'

const setCookie = (name: string, value: string | number, days = 7) => {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = `; expires=${date.toUTCString()}`
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`
}

const COOKIE_NAME = 'counterValue'

type CounterProps = {
  initialCount: number
}

export default function Counter(props: CounterProps) {
  const { initialCount } = props
  const [count, setCount] = useState(initialCount)

  const handleIncrement = () => {
    setCount(count + 1)
    setCookie(COOKIE_NAME, count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
    setCookie(COOKIE_NAME, count - 1)
  }

  return (
    <div>
      <p class="py-2 text-2xl">{count}</p>
      <button class="px-4 py-2 bg-orange-400 text-white rounded cursor-pointer" onClick={handleIncrement}>
        Increment
      </button>
      <button class="px-4 py-2 mx-2 bg-blue-400 text-white rounded cursor-pointer" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  )
}
