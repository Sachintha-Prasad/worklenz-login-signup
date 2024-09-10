import { Button, Typography } from "antd"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageSelector = () => {
    const { i18n } = useTranslation()
    const [language, setLanguage] = useState("en")

    const handleLanguageChange = () => {
        language === "en"
            ? setLanguage("si")
            : language === "si" && setLanguage("en")
        i18n.changeLanguage(language)
    }

    return (
        <Button shape="circle" onClick={handleLanguageChange}>
            <Typography.Text style={{ textTransform: "capitalize" }} strong>
                {language === "en" ? "En" : "සිං"}
            </Typography.Text>
        </Button>
    )
}

export default LanguageSelector
