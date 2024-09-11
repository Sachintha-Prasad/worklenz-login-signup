import { Button, Typography } from "antd"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageSelector = () => {
    const { i18n } = useTranslation()
    const [language, setLanguage] = useState(i18n.language)

    console.log(language)

    const handleLanguageChange = () => {
        if (language === "en") {
            i18n.changeLanguage("si")
            setLanguage("si")
        } else if (language === "si") {
            i18n.changeLanguage("en")
            setLanguage("en")
        }
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
