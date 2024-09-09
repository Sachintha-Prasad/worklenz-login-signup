import React, { useState } from "react"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import {
    Button,
    Checkbox,
    Form,
    Input,
    Flex,
    Typography,
    Space,
    message
} from "antd"
import googleIcon from "../assets/images/icons8-google.svg"
import { Link, useNavigate } from "react-router-dom"
import PageHeader from "../components/PageHeader"

const LoginPage = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values)
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            message.success("You have successfuly logged!")

            setTimeout(() => {
                navigate("/auth/user")
            }, 500)
        }, 1500)
    }

    return (
        <div>
            <PageHeader description="Log Into your account." />
            <Form
                name="login"
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
                            message: "Please input your Email!"
                        }
                    ]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Email"
                        size="large"
                        style={{ borderRadius: 4 }}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                            min: 6
                        }
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Password"
                        size="large"
                        style={{ borderRadius: 4 }}
                    />
                </Form.Item>

                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Link to="/auth/forgot-password">Forgot password</Link>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Flex vertical gap={8}>
                        <Button
                            block
                            type="primary"
                            htmlType="submit"
                            size="large"
                            loading={loading}
                            style={{ borderRadius: 4 }}
                        >
                            Log in
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
                            Don’t have an account?
                        </Typography.Text>

                        <Link to="/auth/signup" style={{ fontSize: 14 }}>
                            Sign Up
                        </Link>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginPage
