import { Button, Flex } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"

const UserPage = () => {
    return (
        <Flex vertical align="center" gap={8}>
            <PageHeader description="Wellcome to user page" />
            <Link to="/auth/login">
                <Button
                    block
                    type="default"
                    size="large"
                    style={{
                        borderRadius: 4
                    }}
                >
                    Log out
                </Button>
            </Link>
        </Flex>
    )
}

export default UserPage
