import React from "react"
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input, Typography, Space, Flex } from "antd"
import googleIcon from "../assets/images/icons8-google.svg"
import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"

const SignupPage = () => {
    const onFinish = (values: any) => {
        console.log("Received values of form: ", values)
    }

    return (
        <div>
            <PageHeader description="Create your account." />
            <Form
                name="signup"
                layout="vertical"
                requiredMark="optional"
                onFinish={onFinish}
                style={{ marginInline: "auto", maxWidth: 400 }}
            >
                <Form.Item
                    name="name"
                    label="Full name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Full name!"
                        }
                    ]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Enter your full name"
                        size="large"
                        style={{ borderRadius: 4 }}
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: "Please input your Email!"
                        }
                    ]}
                >
                    <Input
                        prefix={<MailOutlined />}
                        placeholder="Enter your email"
                        size="large"
                        style={{ borderRadius: 4 }}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!"
                        }
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Enter a strong password"
                        size="large"
                        style={{ borderRadius: 4 }}
                    />
                    <Typography.Text style={{ fontSize: 12, color: "#8c8c8c" }}>
                        Minimum of 8 characters, with upper and lowercase and a
                        number and a symbol.
                    </Typography.Text>
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
                            Sign up
                        </Button>

                        <Typography.Text style={{ textAlign: "center" }}>
                            OR
                        </Typography.Text>

                        <Button
                            block
                            type="default"
                            size="large"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                borderRadius: 4
                            }}
                        >
                            <img
                                src={googleIcon}
                                alt="google icon"
                                style={{ maxWidth: 20, width: "100%" }}
                            />
                            Sign in with Google
                        </Button>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Space>
                        <Typography.Text style={{ fontSize: 14 }}>
                            Already have an account?
                        </Typography.Text>

                        <Link to="/auth/login" style={{ fontSize: 14 }}>
                            Log in
                        </Link>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignupPage
