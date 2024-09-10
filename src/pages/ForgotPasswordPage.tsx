import React, { useState } from "react"
import { UserOutlined } from "@ant-design/icons"
import { Button, Flex, Form, Input, message, Typography } from "antd"
import { Link, useNavigate } from "react-router-dom"
import PageHeader from "../components/PageHeader"

const ForgotPasswordPage = () => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values)
        setIsLoading(true)

        setTimeout(() => {
            message.success(
                `Password reset mail was sent to your Email, check your inbox!`
            )
            setIsLoading(false)
            form.resetFields()

            setTimeout(() => {
                navigate("/auth/login")
            }, 500)
        }, 1500)
    }

    return (
        <div>
            <PageHeader description="Please enter your email address. You will receive a link to create a new password via email." />
            <Form
                name="forgot-password"
                form={form}
                layout="vertical"
                autoComplete="off"
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
                            loading={isLoading}
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
