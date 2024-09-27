import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import {
    Button,
    Empty,
    Flex,
    Input,
    Segmented,
    Table,
    TableProps,
    Typography,
} from 'antd'
import CreateProjectButton from '../../features/projects/CreateProjectButton'
import CreateProject from '../../features/projects/CreateProject'
import { SyncOutlined } from '@ant-design/icons'

const ProjectPage = () => {
    const projectsList = useAppSelector(
        (state) => state.projectReducer.projects
    )

    // project list table's columns
    const columns: TableProps['columns'] = [
        {
            key: 'name',
            dataIndex: 'name',
            title: 'Name',
            sorter: (a, b) => a.name - b.name,
        },
        {
            key: 'client',
            dataIndex: 'client',
            title: 'Client',
            sorter: (a, b) => a.client - b.client,
        },
        {
            key: 'category',
            dataIndex: 'category',
            filters: [
                {
                    text: 'hello',
                    value: 'hello',
                },
                {
                    text: 'bugs',
                    value: 'bugs',
                },
            ],
            title: 'Category',
            onFilter: (value, record) =>
                record.name.indexOf(value as string) === 0,
            sorter: (a, b) => a.category - b.category,
        },
        {
            key: 'status',
            dataIndex: 'status',
            title: 'Status',
            filters: [
                {
                    text: 'Cancelled',
                    value: 'cancelled',
                },
                {
                    text: 'Blocked',
                    value: 'blocked',
                },
            ],
            onFilter: (value, record) =>
                record.name.indexOf(value as string) === 0,
            sorter: (a, b) => a.status - b.status,
        },
        { key: 'taskProgess', dataIndex: 'taskProgess', title: 'Task Progess' },
        {
            key: 'lastUpdated',
            dataIndex: 'lastUpdated',
            title: 'Last Updated',
            sorter: (a, b) => a.lastUpdated - b.lastUpdated,
        },
        { key: 'members', dataIndex: 'members', title: 'Members' },
    ]

    return (
        <Flex vertical gap={48} style={{ marginBlock: 96, minHeight: '75vh' }}>
            <Flex align="center" justify="space-between">
                <Typography.Title level={4}>
                    {projectsList.length} Projects
                </Typography.Title>

                <Flex gap={8} align="center">
                    <Button shape="circle" icon={<SyncOutlined />} />
                    <Segmented<string>
                        options={['All', 'Favourites', 'Archived']}
                        defaultValue="All"
                    />
                    <Input placeholder="Search by name"></Input>
                    <CreateProjectButton />
                </Flex>
            </Flex>

            {/* project list table  */}
            <div
                style={{
                    border: `1px solid #f0f0ff`,
                    borderRadius: 8,
                    padding: 16,
                }}
            >
                <Table
                    dataSource={projectsList}
                    locale={{
                        emptyText: () => (
                            <Empty
                                image="https://app.worklenz.com/assets/images/empty-box.webp"
                                imageStyle={{ height: 120 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginBlock: 24,
                                }}
                                description={
                                    <Typography.Text>
                                        The team currently has no active
                                        projects.
                                    </Typography.Text>
                                }
                            />
                        ),
                    }}
                    columns={columns}
                />
            </div>

            {/* create project drawer  */}
            <CreateProject />
        </Flex>
    )
}

export default ProjectPage
