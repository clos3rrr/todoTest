import React from 'react'
import styles from './todoList.module.scss'
import { List, Button } from 'antd'
import { $todo, deleteTodo } from '../../models/todo'
import { useStore } from 'effector-react'
import { CloseOutlined, EditFilled } from '@ant-design/icons'

interface iTodoListProps {
  handleEditClick: (todo: Todo) => void
}

export const TodoList = ({ handleEditClick }: iTodoListProps): JSX.Element => {
  const todos = useStore($todo)

  return (
    <List
      locale={{
        emptyText: 'Nothing to do'
      }}
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          extra = {
            <div className={styles.buttons}>
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
