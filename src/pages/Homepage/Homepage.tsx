import React, { useRef, useState } from 'react'
import { TodoList } from '../../components/TodoList/TodoList'
import { Button } from 'antd'
import { TodoFormModal } from '../../components/forms/TodoForm/TodoFormModal'
import { PageWrapper } from '../../components/PageWrapper/PageWrapper'

export const Homepage = (): JSX.Element => {
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

  return (
    <PageWrapper title='Homepage'>
      <Button type="primary" size='large' htmlType="button" onClick={handleAddClick}>
          Add todo
      </Button>
      <TodoList handleEditClick={handleEditClick}/>
      <TodoFormModal open={isModalOpen} setOpen={setIsModalOpen} todo={todoRef.current}/>
    </PageWrapper>
  )
}
