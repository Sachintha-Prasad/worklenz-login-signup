import React from "react"
import { UserOutlined } from "@ant-design/icons"
import { Button, Flex, Form, Input, Typography } from "antd"
import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"

const ForgotPasswordPage = () => {
    const onFinish = (values: any) => {
        console.log("Received values of form: ", values)
    }

    return (
        <div>
            <PageHeader description="Please enter your email address. You will receive a link to create a new password via email." />
            <Form
                name="login"
                layout="vertical"
                requiredMark="optional"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ marginInline: "auto", maxWidth: 400 }}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: "Please enter your Email!"
                        }
                    ]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Enter your email"
                        size="large"
                        style={{ borderRadius: 4 }}
                    />
                </Form.Item>

                <Form.Item>
                    <Flex vertical gap={8}>
                        <Button
                            block
                            type="primary"
                            htmlType="submit"
                            size="large"
                            style={{ borderRadius: 4 }}
                        >
                            Reset Password
                        </Button>
                        <Typography.Text style={{ textAlign: "center" }}>
                            OR
                        </Typography.Text>
                        <Link to="/auth/login">
                            <Button
                                block
                                type="default"
                                size="large"
                                style={{
                                    borderRadius: 4
                                }}
                            >
                                Return to Login
                            </Button>
                        </Link>
                    </Flex>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ForgotPasswordPage
