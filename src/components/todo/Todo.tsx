import './todo.css'
import MyCheckbox from '../myCheckbox/MyCheckbox'
export type TodoProps = {
  id: number | string
  body: string
  complited: boolean
}

const Todo = ({ id, body, complited }: TodoProps) => {
  return (
    <div className='todo__container'>
      <MyCheckbox id={id} complited={complited} />
      <p className={`todo__text ${complited ? 'complited' : ''}`}>{body}</p>
    </div>
  )
}

export default Todo
