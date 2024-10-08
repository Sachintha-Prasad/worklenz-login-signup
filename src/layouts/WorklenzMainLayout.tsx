import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import { Col, Layout } from 'antd'
import { useAppSelector } from '../hooks/useAppSelector'

const WorklenzMainLayout = () => {
    const themeMode = useAppSelector((state) => state.themeReducer.mode)

    return (
        <Layout>
            <Layout.Header
                className={`shadow-md ${themeMode === 'dark' ? 'shadow-[#5f5f5f1f]' : 'shadow-[#18181811]'}`}
                style={{
                    zIndex: 999,
                    position: 'fixed',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    padding: 0,
                }}
            >
                <Navbar />
            </Layout.Header>
            <Layout.Content>
                <Col
                    xs={{ span: 20, offset: 2, flex: '100%' }}
                    sm={{ span: 16, offset: 4, flex: '100%' }}
                >
                    <Outlet />
                </Col>
            </Layout.Content>
        </Layout>
    )
}

export default WorklenzMainLayout
