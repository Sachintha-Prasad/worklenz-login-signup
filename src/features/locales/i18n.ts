import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import enLng from "../../lib/locales/en/en.json"
import siLng from "../../lib/locales/si/si.json"

const resources = {
    en: {
        translation: enLng
    },
    si: {
        translation: siLng
    }
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
