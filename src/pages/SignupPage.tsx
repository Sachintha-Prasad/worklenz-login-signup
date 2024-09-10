import React, { useState } from "react"
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input, Typography, Space, Flex, message } from "antd"
import googleIcon from "../assets/images/icons8-google.svg"
import { Link, useNavigate } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import { useTranslation } from "react-i18next"

const SignupPage = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { t } = useTranslation()

    const onFinish = (values: any) => {
        console.log("Received values of form: ", values)
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            message.success(t("messages.signupSuccess"))

            setTimeout(() => {
                navigate("/auth/login")
            }, 500)
        }, 1500)
    }

    return (
        <div>
            <PageHeader description={t("headerDescriptions.signup")} />
            <Form
                name="signup"
                layout="vertical"
                autoComplete="off"
                requiredMark="optional"
                onFinish={onFinish}
                style={{ marginInline: "auto", maxWidth: 400 }}
            >
                <Form.Item
                    name="name"
                    label={t("inputElements.nameLabel")}
                    rules={[
                        {
                            required: true,
                            message: t("inputElements.nameRequired"),
                            whitespace: true
                        },
                        {
                            min: 4,
                            message: t("inputElements.nameMinCharacterRequired")
                        }
                    ]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder={t("inputElements.namePlaceholder")}
                        size="large"
                        style={{ borderRadius: 4 }}
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    label={t("inputElements.emailLabel")}
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: t("inputElements.emailRequired")
                        }
                    ]}
                >
                    <Input
                        prefix={<MailOutlined />}
                        placeholder={t("inputElements.emailPlaceholder")}
                        size="large"
                        style={{ borderRadius: 4 }}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label={t("inputElements.passwordLabel")}
                    rules={[
                        {
                            required: true,
                            message: t("inputElements.passwordRequired")
                        },
                        {
                            min: 8,
                            message: t(
                                "inputElements.passwordMinCharacterRequired"
                            )
                        },
                        {
                            pattern:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])/,
                            message: t("inputElements.passwordPatternRequired")
                        }
                    ]}
                >
                    <div>
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder={t(
                                "inputElements.strongPasswordPlaceholder"
                            )}
                            size="large"
                            style={{ borderRadius: 4 }}
                        />
                        <Typography.Text
                            style={{ fontSize: 12, color: "#8c8c8c" }}
                        >
                            {t("inputElements.passwordValidationAltText")}
                        </Typography.Text>
                    </div>
                </Form.Item>

                <Form.Item>
                    <Typography.Paragraph style={{ fontSize: 14 }}>
                        {t("bySigningUpYouWillAgreeToOur")}
                        <Link to="/privacy-policy">
                            {" "}
                            {t("buttons.privacyPolicy")}
                        </Link>{" "}
                        {t("andText")}
                        <Link to="/terms-of-use">
                            {" "}
                            {t("buttons.termsOfUse")}
                        </Link>
                        .
                    </Typography.Paragraph>
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
                            {t("buttons.signup")}
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
                            {t("alreadyHaveAccount")}
                        </Typography.Text>

                        <Link to="/auth/login" style={{ fontSize: 14 }}>
                            {t("buttons.signup")}
                        </Link>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignupPage
