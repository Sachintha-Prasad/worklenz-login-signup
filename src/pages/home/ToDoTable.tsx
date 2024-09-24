import { SyncOutlined } from "@ant-design/icons"
import { Button, Card, Empty, Input, Table, Typography } from "antd"
import React from "react"

const ToDoTable = () => {
    return (
        <Card
            title="To do list (0)"
            extra={<Button shape="circle" icon={<SyncOutlined />} />}
            style={{ width: "100%", maxWidth: 1200 }}
        >
            <Input placeholder="+ Add Task" />
            <Table
                showHeader={false}
                locale={{
                    emptyText: () => (
                        <Empty
                            image="https://app.worklenz.com/assets/images/empty-box.webp"
                            imageStyle={{ height: 60 }}
                            description={
                                <Typography.Text>
                                    No tasks to show.
                                </Typography.Text>
                            }
                        />
                    )
                }}
            ></Table>
        </Card>
    )
}

export default ToDoTable
