import React, { useRef, useState } from 'react'
import './App.scss'
import { TodoList } from './components/TodoList/TodoList'
import { Button } from 'antd'
import { TodoFormModal } from './components/forms/TodoForm/TodoFormModal'

const App = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const todoRef = useRef<Todo | null>(null)

  const handleEditClick = (todo: Todo): void => {
    todoRef.current = todo
    setIsModalOpen(true)
  }

  const handleAddClick = (): void => {
    todoRef.current = null
    setIsModalOpen(true)
  }

  return <div className="App">
    <Button type="primary" htmlType="button" onClick={handleAddClick}>
      Add todo
    </Button>
    <TodoList handleEditClick={handleEditClick}/>
    <TodoFormModal open={isModalOpen} setOpen={setIsModalOpen} todo={todoRef.current}/>
  </div>
}

export default App
