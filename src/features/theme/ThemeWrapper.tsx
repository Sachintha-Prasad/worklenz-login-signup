import { ConfigProvider, theme } from "antd"
import React from "react"
import { useAppSelector } from "../../hooks/useAppSelector"

type ChildrenProp = {
    children: React.ReactNode
}

const ThemeWrapper = ({ children }: ChildrenProp) => {
    const themeMode = useAppSelector((state) => state.themeReducer.mode)

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
            {children}
        </ConfigProvider>
    )
}

export default ThemeWrapper
