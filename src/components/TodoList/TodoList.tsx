import React from 'react'
import { List, Button } from 'antd'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { CloseOutlined, EditFilled } from '@ant-design/icons'

interface iTodoListProps {
  handleEditClick: (todo: Todo) => void
}

export const TodoList = ({ handleEditClick }: iTodoListProps): JSX.Element => {
  const todos = useTypedSelector(state => state.todo.todos)
  const { deleteTodo } = useActions()

  return (
    <List
      locale={{
        emptyText: 'Nothing to do'
      }}
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          extra = {
            <div>
              <Button type="primary" htmlType="button" onClick={() => { handleEditClick(todo) }} icon={<EditFilled />}/>
              <Button type="primary" htmlType="button" onClick={() => deleteTodo(todo.id)} icon={<CloseOutlined />} danger />
            </div>
          }
        >
          {todo.description}
        </List.Item>
      )}
      pagination={{
        position: 'bottom',
        pageSize: 10
      }}
    />
  )
}
