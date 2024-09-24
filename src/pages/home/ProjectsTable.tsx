import { SyncOutlined } from "@ant-design/icons"
import { Button, Card, Empty, Flex, Segmented, Table, Typography } from "antd"
import React from "react"

const ProjectsTable = () => {
    return (
        <Card
            title="Projects (0)"
            extra={
                <Flex gap={8} align="center">
                    <Button shape="circle" icon={<SyncOutlined />} />
                    <Segmented<string>
                        options={["Recent", "Favourites"]}
                        defaultValue="Recent"
                    />
                </Flex>
            }
            style={{ width: "100%", maxWidth: 1200 }}
        >
            <Table
                showHeader={false}
                locale={{
                    emptyText: () => (
                        <Empty
                            image="https://app.worklenz.com/assets/images/empty-box.webp"
                            imageStyle={{ height: 60 }}
                            description={
                                <Typography.Text>
                                    You have not assigned to any project yet.
                                </Typography.Text>
                            }
                        />
                    )
                }}
            ></Table>
        </Card>
    )
}

export default ProjectsTable
