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
import { useTranslation } from "react-i18next"

const LoginPage = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { t } = useTranslation()

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values)
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            message.success(t("messages.loginSuccess"))

            setTimeout(() => {
                navigate("/auth/user")
            }, 500)
        }, 1500)
    }

    return (
        <div>
            <PageHeader description={t("headerDescriptions.login")} />
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
                            message: t("inputElements.emailRequired")
                        }
                    ]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder={t("inputElements.emailPlaceholder")}
                        size="large"
                        style={{ borderRadius: 4 }}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: t("inputElements.passwordRequired"),
                            min: 8
                        }
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder={t("inputElements.passwordPlaceholder")}
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
                            <Checkbox>{t("buttons.rememberMe")}</Checkbox>
                        </Form.Item>

                        <Link to="/auth/forgot-password">
                            {t("buttons.forgotPassword")}
                        </Link>
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
                            {t("buttons.login")}
                        </Button>
                        <Typography.Text style={{ textAlign: "center" }}>
                            {t("orText")}
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
                            {t("buttons.signInWithGoogle")}
                        </Button>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Space>
                        <Typography.Text style={{ fontSize: 14 }}>
                            {t("dontHaveAccount")}
                        </Typography.Text>

                        <Link to="/auth/signup" style={{ fontSize: 14 }}>
                            {t("buttons.signup")}
                        </Link>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginPage
