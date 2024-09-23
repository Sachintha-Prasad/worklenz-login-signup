import React from "react"
import notFoundImg from "../assets/images/not-found-img.png"
import { Button, Flex, Layout, Typography } from "antd"

const NotFoundPage = () => {
    return (
        <Layout
            style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginInline: "auto",
                minHeight: "100vh",
                paddingInline: 24
            }}
        >
            <img
                src={notFoundImg}
                alt="not found page"
                style={{ width: "100%", maxWidth: 800 }}
            />
            <Flex vertical gap={8} align="center">
                <Typography.Title style={{ marginBlockEnd: 0 }}>
                    404
                </Typography.Title>
                <Typography.Text style={{ textAlign: "center" }}>
                    Sorry, the page you visited does not exist.
                </Typography.Text>
                <Button type="primary" href="/worklenz/home">
                    Back Home
                </Button>
            </Flex>
        </Layout>
    )
}

export default NotFoundPage
