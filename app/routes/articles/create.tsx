import { FC } from 'hono/jsx'
import { createRoute } from 'honox/factory'

const Page: FC = () => {
  return (
    <div>
      <h1 class="text-xl font-bold my-4">記事を作成</h1>
      <form class="flex flex-col gap-4" method="post">
        <label class="flex flex-col gap-2 font-bold">
          タイトル
          <input
            type="text"
            name="title"
            class="w-full py-2 px-3 border-2 border-gray-300 border-solid rounded-sm outline-none ring-0 font-normal"
          />
        </label>
        <label class="flex flex-col gap-2 font-bold">
          内容
          <textarea
            name="content"
            class="w-full py-2 px-3 border-2 border-gray-300 border-solid rounded-sm outline-none ring-0 font-normal min-h-[10rem] resize-y"
          ></textarea>
        </label>
        <button class="bg-blue-600 text-gray-300 rounded-sm py-2 px-4 cursor-pointer font-bold duration-200 ease-in-out hover:bg-blue-800 hover:text-gray-200">
          作成
        </button>
      </form>
    </div>
  )
}

export default createRoute((c) => {
  return c.render(<Page />)
})
