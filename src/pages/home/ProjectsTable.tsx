import { StarFilled, SyncOutlined } from '@ant-design/icons'
import { Button, Card, Empty, Flex, Segmented, Tooltip, Typography } from 'antd'
import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'

const ProjectsTable = () => {
    const projectsList = useAppSelector(
        (state) => state.projectReducer.projects
    )

    return (
        <Card
            title={
                <Typography.Title level={5} style={{ marginBlockEnd: 0 }}>
                    Projects ({projectsList.length})
                </Typography.Title>
            }
            extra={
                <Flex gap={8} align="center">
                    <Button shape="circle" icon={<SyncOutlined />} />
                    <Segmented<string>
                        options={['Recent', 'Favourites']}
                        defaultValue="Recent"
                    />
                </Flex>
            }
            style={{ width: '100%' }}
        >
            {projectsList.length === 0 ? (
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
                            You have not assigned to any project yet.
                        </Typography.Text>
                    }
                />
            ) : (
                <div>
                    {projectsList.map((project, index) => (
                        <Flex key={index} gap={8} align="center">
                            <Tooltip title={'Add to favourites'}>
                                <StarFilled
                                    style={{
                                        fontSize: 20,
                                        color: '#5f5f5f7f',
                                    }}
                                />
                            </Tooltip>
                            <Typography.Text>{project.name}</Typography.Text>
                        </Flex>
                    ))}
                </div>
            )}
        </Card>
    )
}

export default ProjectsTable
