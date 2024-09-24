import { SyncOutlined } from "@ant-design/icons"
import {
    Button,
    Card,
    Empty,
    Flex,
    Input,
    Segmented,
    Select,
    Table,
    Typography
} from "antd"
import React from "react"

const TasksTable = () => {
    return (
        <Card
            title={
                <Flex gap={8} align="center">
                    <Typography.Title level={5} style={{ margin: 0 }}>
                        Tasks
                    </Typography.Title>
                    <Select
                        defaultValue="assigned to me"
                        options={[
                            {
                                value: "assigned to me",
                                label: "assigned to me"
                            },
                            { value: "assigned by me", label: "assigned by me" }
                        ]}
                    />
                </Flex>
            }
            extra={
                <Flex gap={8} align="center">
                    <Button shape="circle" icon={<SyncOutlined />} />
                    <Segmented<string>
                        options={["List", "Calendar"]}
                        defaultValue="List"
                    />
                </Flex>
            }
            style={{ width: "100%", maxWidth: 1200 }}
        >
            <Input
                placeholder="+ Add Task"
                style={{ width: "100%", maxWidth: 300 }}
            />
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

export default TasksTable
