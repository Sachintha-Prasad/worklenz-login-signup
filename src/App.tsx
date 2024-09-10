import React, { useState } from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"

import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import AuthLayout from "./layouts/AuthLayout"
import UserPage from "./pages/UserPage"

import { ConfigProvider, Switch, theme } from "antd"

const { darkAlgorithm, defaultAlgorithm } = theme

const App = () => {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false)

    const handleDarkModeToggle = () => {
        setIsDarkModeEnabled((prev) => !prev)
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
                algorithm: isDarkModeEnabled ? darkAlgorithm : defaultAlgorithm,
                components: {
                    Layout: {
                        colorBgLayout: isDarkModeEnabled ? "black" : "white"
                    }
                }
            }}
        >
            <Switch
                onChange={handleDarkModeToggle}
                style={{ position: "absolute", top: 48, right: "10%" }}
                title="theme-switch"
            />
            <RouterProvider router={router} />
        </ConfigProvider>
    )
}

export default App
