import {
    CheckCircleOutlined,
    CheckCircleTwoTone,
    SyncOutlined,
} from '@ant-design/icons'
import {
    Button,
    Card,
    Empty,
    Flex,
    Form,
    Input,
    Tooltip,
    Typography,
} from 'antd'
import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { TodoType } from '../../types/todo'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addTodo } from '../../features/todo/todoSlice'
import { colors } from '../../styles/colors'

const ToDoTable = () => {
    const todoList = useAppSelector((state) => state.todoReducer.todoList)
    const dispatch = useAppDispatch()

    const [form] = Form.useForm()

    const handleTodoSubmit = (values: any) => {
        const newTodo: TodoType = {
            name: values.name,
            isCompleted: false,
        }
        form.resetFields()
        dispatch(addTodo(newTodo))
    }

    return (
        <Card
            title={
                <Typography.Title level={5} style={{ marginBlockEnd: 0 }}>
                    To do list ({todoList.length})
                </Typography.Title>
            }
            extra={<Button shape="circle" icon={<SyncOutlined />} />}
            style={{ width: '100%' }}
        >
            <Form onFinish={handleTodoSubmit}>
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please add a task',
                        },
                    ]}
                >
                    <Input placeholder="+ Add Task" />
                </Form.Item>
            </Form>

            {todoList.length === 0 ? (
                <Empty
                    image="https://app.worklenz.com/assets/images/empty-box.webp"
                    imageStyle={{ height: 60 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    description={
                        <Typography.Text>No tasks to show.</Typography.Text>
                    }
                />
            ) : (
                <Flex vertical gap={8}>
                    {todoList.map((todo, index) => (
                        <Flex key={index} gap={8}>
                            <Tooltip title={'Mark as done'}>
                                <CheckCircleOutlined
                                    style={{
                                        fontSize: 18,
                                        color: colors.lightGray,
                                    }}
                                />
                            </Tooltip>
                            <Typography.Text>{todo.name}</Typography.Text>
                        </Flex>
                    ))}
                </Flex>
            )}
        </Card>
    )
}

export default ToDoTable
