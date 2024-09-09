import { Button, Flex } from "antd"
import React from "react"
import { Link } from "react-router-dom"

const UserPage = () => {
    return (
        <Flex vertical align="center" gap={8}>
            <h1>Wellcome to user page!</h1>
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
