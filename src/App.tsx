import React from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"
import { Button, ConfigProvider, Flex, theme } from "antd"
import { MoonOutlined, SunOutlined } from "@ant-design/icons"

import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import AuthLayout from "./layouts/AuthLayout"
import UserPage from "./pages/UserPage"
import LanguageSelector from "./features/locales/LanguageSelector"
import { useAppSelector } from "./hooks/useAppSelector"
import { useAppDispatch } from "./hooks/useAppDispatch"
import { toggleTheme } from "./features/theme/themeSlice"

const App = () => {
    const themeMode = useAppSelector((state) => state.themeReducer.mode)
    const dispatch = useAppDispatch()

    const handleDarkModeToggle = () => {
        dispatch(toggleTheme())
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/signup" element={<SignupPage />} />
                    <Route
                        path="/auth/forgot-password"
                        element={<ForgotPasswordPage />}
                    />
                    <Route path="/auth/user" element={<UserPage />} />
                </Route>
            </Route>
        )
    )
    return (
        <ConfigProvider
            theme={{
                algorithm:
                    themeMode === "dark"
                        ? theme.darkAlgorithm
                        : theme.defaultAlgorithm,
                components: {
                    Layout: {
                        colorBgLayout: themeMode === "dark" ? "black" : "white"
                    }
                }
            }}
        >
            <Flex
                align="center"
                justify="center"
                gap={12}
                style={{ position: "absolute", top: 48, right: "10%" }}
            >
                <LanguageSelector />
                <Button
                    type={themeMode === "dark" ? "primary" : "default"}
                    icon={
                        themeMode === "dark" ? (
                            <SunOutlined />
                        ) : (
                            <MoonOutlined />
                        )
                    }
                    shape="circle"
                    onClick={handleDarkModeToggle}
                />
            </Flex>

            <RouterProvider router={router} />
        </ConfigProvider>
    )
}

export default App
