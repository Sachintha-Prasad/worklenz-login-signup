import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// component based translation files
// english
import loginPageEn from './locales/en/loginPage.json'
import signupPageEn from './locales/en/signupPage.json'
import forgotPasswordPageEn from './locales/en/forgotPasswordPage.json'
import notFoundPageEn from './locales/en/notFoundPage.json'
import navbarEn from './locales/en/navbar.json'

// sinhala
import loginPageSi from './locales/si/loginPage.json'
import signupPageSi from './locales/si/signupPage.json'
import forgotPasswordPageSi from './locales/si/forgotPasswordPage.json'
import notFoundPageSi from './locales/si/notFoundPage.json'
import navbarSi from './locales/si/navbar.json'

const resources = {
    en: {
        loginPage: loginPageEn,
        signupPage: signupPageEn,
        forgotPasswordPage: forgotPasswordPageEn,
        notFoundPage: notFoundPageEn,
        navbar: navbarEn,
    },
    si: {
        loginPage: loginPageSi,
        signupPage: signupPageSi,
        forgotPasswordPage: forgotPasswordPageSi,
        notFoundPage: notFoundPageSi,
        navbar: navbarSi,
    },
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
