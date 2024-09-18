import { Button, Typography } from "antd"
import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { toggleLng } from "./localesSlice"

const LanguageSelector = () => {
    const { i18n } = useTranslation()
    const language = useAppSelector((state) => state.localesReducer.lng)
    const dispatch = useAppDispatch()

    useEffect(() => {
        i18n.changeLanguage(language)
    }, [i18n, language])

    // function for handle language change toggle
    const handleLanguageChange = () => {
        dispatch(toggleLng())
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
