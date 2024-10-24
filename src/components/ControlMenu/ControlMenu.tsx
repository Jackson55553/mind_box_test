import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  changeCollectionTodos,
  deleteComplitedTodos,
  selectTodos,
  TodosCollection
} from '../../store/noteSlice'
import './controlMenu.css'
const ControlMenu = () => {
  const itemsLeft = useAppSelector(selectTodos).filter(todo => !todo.complited)
  const dispatch = useAppDispatch()

  return (
    <div className='controlMenu__container'>
      <p className='itemsCount'>{`${itemsLeft.length} items left`}</p>
      <div className='controlMenu__btn_container'>
        <button
          className='controlMenu__btn'
          type='button'
          onClick={() => dispatch(changeCollectionTodos(TodosCollection.ALL))}
        >
          {'All'}
        </button>
        <button
          className='controlMenu__btn'
          type='button'
          onClick={() =>
            dispatch(changeCollectionTodos(TodosCollection.ACTIVE))
          }
        >
          {'Active'}
        </button>
        <button
          className='controlMenu__btn'
          type='button'
          onClick={() =>
            dispatch(changeCollectionTodos(TodosCollection.COMPLITED))
          }
        >
          {'Complited'}
        </button>
      </div>
      <button
        className='controlMenu__btn'
        type='button'
        onClick={() => {
          dispatch(deleteComplitedTodos())
          dispatch(changeCollectionTodos(TodosCollection.ALL))
        }}
      >
        {'Clear complited'}
      </button>
    </div>
  )
}

export default ControlMenu
