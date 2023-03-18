import React from 'react'
import { Form, Input, Modal } from 'antd'
import { useActions } from '../../../hooks/useActions'

interface ITodoFormModalProps {
  todo: Todo | null
  open: boolean
  setOpen: (value: boolean) => void
}

export const TodoFormModal = ({ todo, open, setOpen }: ITodoFormModalProps): JSX.Element => {
  const [form] = Form.useForm()
  const { addTodo, editTodo } = useActions()

  const handleSubmit = (): void => {
    form
      .validateFields()
      .then(({ description }) => {
        if (todo != null) {
          editTodo({ ...todo, description })
        } else {
          addTodo({
            id: Symbol('id'),
            createdAt: new Date(),
            description
          })
        }
        setOpen(false)
      })
      .catch((error) => {
        console.log('Validate Failed:', error)
      })
  }

  return (
    <Modal
      open={open}
      title="Describe your task"
      okText="Submit"
      onCancel={() => {
        setOpen(false)
      }}
      onOk={handleSubmit}
      destroyOnClose
    >
      <Form
        form={form}
        preserve={false}
        onFinish={handleSubmit}
        initialValues = {{ description: (todo != null) ? todo.description : '' }}
        layout="vertical"
      >
        <Form.Item
          name={'description'}
          rules={[{ required: true, message: 'This field is required' }]}
        >
          <Input placeholder="task description" />
        </Form.Item>
      </Form>
    </Modal>
  )
}
