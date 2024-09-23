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
import ThemeWrapper from "./features/theme/ThemeWrapper"
import WorklenzMainLayout from "./layouts/WorklenzMainLayout"
import Homepage from "./pages/home/Homepage"
import ProjectPage from "./pages/projects/ProjectPage"
import PreferenceSelector from "./components/PreferenceSelector"
import NotFoundPage from "./pages/NotFoundPage"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                {/* worklenz app routes  */}
                <Route path="/worklenz" element={<WorklenzMainLayout />}>
                    <Route path="/worklenz/home" element={<Homepage />} />
                    <Route
                        path="/worklenz/projects"
                        element={<ProjectPage />}
                    />
                </Route>

                {/* auth routes */}
                <Route path={"/auth"} element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/signup" element={<SignupPage />} />
                    <Route
                        path="/auth/forgot-password"
                        element={<ForgotPasswordPage />}
                    />
                </Route>

                {/* not found pages */}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    )
    return (
        <ThemeWrapper>
            <RouterProvider router={router} />
            <PreferenceSelector />
        </ThemeWrapper>
    )
}

export default App
