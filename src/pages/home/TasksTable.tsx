import { SyncOutlined } from '@ant-design/icons'
import {
    Button,
    Card,
    Empty,
    Flex,
    Input,
    Segmented,
    Select,
    Table,
    Tabs,
    Typography,
    Calendar,
    Tooltip,
} from 'antd'
import React, { useState } from 'react'

const TasksTable = () => {
    const [isCalenderOpen, setIsCalenderOpen] = useState(false)
    const [isSpin, setIsSpin] = useState(false)

    // function for handle spin animation
    const handleSpinAnimation = () => {
        setIsSpin(true)
        setTimeout(() => setIsSpin(false), 500)
    }

    // function for handle segmaent change and render the calender
    const handleSegmentChange = (value: string) => {
        if (value === 'Calendar') {
            setIsCalenderOpen(true)
            handleSpinAnimation()
        } else {
            setIsCalenderOpen(false)
            handleSpinAnimation()
        }
    }

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
                                value: 'assigned to me',
                                label: 'assigned to me',
                            },
                            {
                                value: 'assigned by me',
                                label: 'assigned by me',
                            },
                        ]}
                    />
                </Flex>
            }
            extra={
                <Flex gap={8} align="center">
                    <Tooltip title={'Refresh'} trigger={'hover'}>
                        <Button
                            shape="circle"
                            icon={<SyncOutlined spin={isSpin} />}
                            onClick={() => handleSpinAnimation()}
                        />
                    </Tooltip>
                    <Segmented<string>
                        options={['List', 'Calendar']}
                        defaultValue="List"
                        onChange={(value) => handleSegmentChange(value)}
                    />
                </Flex>
            }
            style={{ width: '100%' }}
        >
            {isCalenderOpen && <Calendar />}

            <Tabs
                type="card"
                items={[
                    {
                        key: 'all',
                        label: `All (0)`,
                        children: (
                            <Input
                                placeholder="+ Add Task"
                                style={{ width: '100%', maxWidth: 300 }}
                            />
                        ),
                    },
                    {
                        key: 'today',
                        label: `Today (0)`,
                    },
                    {
                        key: 'upcoming',
                        label: `Upcoming (0)`,
                    },
                    {
                        key: 'overdue',
                        label: `Overdue (0)`,
                    },
                    {
                        key: 'no due date',
                        label: `No due date (0)`,
                    },
                ]}
            />
            <Table
                showHeader={false}
                locale={{
                    emptyText: () => (
                        <Empty
                            image="https://app.worklenz.com/assets/images/empty-box.webp"
                            imageStyle={{ height: 60 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            description={
                                <Typography.Text>
                                    No tasks to show.
                                </Typography.Text>
                            }
                        />
                    ),
                }}
            ></Table>
        </Card>
    )
}

export default TasksTable
