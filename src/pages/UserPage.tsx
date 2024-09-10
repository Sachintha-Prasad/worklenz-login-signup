import { Button, Flex } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import { useTranslation } from "react-i18next"

const UserPage = () => {
    const { t } = useTranslation()
    return (
        <Flex vertical align="center" gap={8}>
            <PageHeader description={t("headerDescriptions.userPage")} />
            <Link to="/auth/login">
                <Button
                    block
                    type="default"
                    size="large"
                    style={{
                        borderRadius: 4
                    }}
                >
                    {t("buttons.logout")}
                </Button>
            </Link>
        </Flex>
    )
}

export default UserPage
