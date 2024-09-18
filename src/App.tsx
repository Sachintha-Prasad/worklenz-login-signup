import React from "react"
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
import LanguageSelector from "./features/locales/LanguageSelector"
import ThemeWrapper from "./features/theme/ThemeWrapper"
import { Flex } from "antd"
import ThemeSelector from "./features/theme/ThemeSelector"

const App = () => {
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
        <ThemeWrapper>
            <Flex
                align="center"
                justify="center"
                gap={12}
                style={{ position: "absolute", top: 48, right: "10%" }}
            >
                <LanguageSelector />
                <ThemeSelector />
            </Flex>
            <RouterProvider router={router} />
        </ThemeWrapper>
    )
}

export default App
