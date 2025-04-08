import { css } from 'hono/css'
import { FC } from 'hono/jsx'
import { createRoute } from 'honox/factory'

const titleClass = css`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const formClass = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const labelClass = css`
  display: flex;
  flex-direction: column;
  font-weight: bold
  gap: 0.5rem;
`

const inputClass = css`
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-radius: 3px;
  border: 2px solid #ddd;
`

const textareaClass = css`
  width: 100%;
  border-radius: 3px;
  border: 2px solid #ddd;
  padding: 0.5rem 0.25rem;
  min-height: 10rem;
  resize: vertical;
`

const buttonClass = css`
  padding: 0.5rem 1rem;
  border-radius: 3px;
  background-color: #007bff;
  color: #ddd;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;

  // &:hover {
  //   background-color: #ddd;
  //   color: #007bff;
  // }
`

const Page: FC = () => {
  return (
    <div>
      <h1 class={titleClass}>Create an article</h1>
      <form class={formClass} method="post">
        <label class={labelClass}>
          Title
          <input type="text" name="title" class={inputClass} />
        </label>
        <label class={labelClass}>
          Content
          <textarea name="content" class={textareaClass}></textarea>
        </label>
        <button class={buttonClass}>作成</button>
      </form>
    </div>
  )
}

export default createRoute((c) => {
  return c.render(<Page />)
})
