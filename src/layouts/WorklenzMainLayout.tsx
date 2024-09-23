import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import { Col, Layout } from "antd"

const WorklenzMainLayout = () => {
    return (
        <Layout>
            <Layout.Header
                style={{
                    zIndex: 999,
                    position: "fixed",
                    width: "100%",
                    minHeight: 80,
                    display: "flex",
                    alignItems: "center",
                    padding: 0
                }}
            >
                <Navbar />
            </Layout.Header>
            <Layout.Content>
                <Col
                    xs={{ span: 20, offset: 2, flex: "100%" }}
                    sm={{ span: 18, offset: 3, flex: "100%" }}
                >
                    <Outlet />
                </Col>
            </Layout.Content>
        </Layout>
    )
}

export default WorklenzMainLayout
