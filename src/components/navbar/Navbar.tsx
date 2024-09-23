import React, { useState } from "react"
import logo from "../../assets/images/logo.png"
import {
    Avatar,
    Button,
    Col,
    Drawer,
    Dropdown,
    Flex,
    Menu,
    Space,
    Tooltip,
    Typography
} from "antd"
import { NavLink, useLocation } from "react-router-dom"
import {
    BankOutlined,
    BellOutlined,
    CheckCircleTwoTone,
    DownOutlined,
    MenuOutlined,
    QuestionCircleOutlined,
    UsergroupAddOutlined,
    UserOutlined
} from "@ant-design/icons"
import { useMediaQuery } from "react-responsive"

const Navbar = () => {
    const location = useLocation()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuToggle = () => setIsMenuOpen((prevState) => !prevState)

    // Media queries from react-responsive package
    const isMobile = useMediaQuery({ query: "(max-width: 576px)" })
    const isTablet = useMediaQuery({ query: "(min-width: 576px)" })
    const isDesktop = useMediaQuery({ query: "(min-width: 920px)" })

    // Function for setting the key of the current active nav link
    const currentActiveKey = () => {
        if (location.pathname.includes("/home")) return "home"
        if (location.pathname.includes("/projects")) return "projects"
        if (location.pathname.includes("/schedules")) return "schedules"
        if (location.pathname.includes("/reporting")) return "reporting"
        return "path not matched"
    }

    // Switch teams dropdown items
    const items = [
        {
            key: "0",
            label: (
                <Space>
                    <Avatar size="small" style={{ backgroundColor: "#f56a00" }}>
                        S
                    </Avatar>
                    <Flex vertical>
                        <Typography.Text
                            style={{ fontSize: 12, fontWeight: 300 }}
                        >
                            owned by you
                        </Typography.Text>
                        <Typography.Text>Sachintha Prasad</Typography.Text>
                    </Flex>
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                </Space>
            )
        }
    ]

    return (
        <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 22, offset: 1 }}
            style={{
                width: "100%",
                display: "flex",
                gap: 12,
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            {/* Logo */}
            <img
                src={logo}
                alt="logo"
                style={{ width: "100%", maxWidth: 140 }}
            />
            {isDesktop && (
                <Flex
                    align="center"
                    justify="space-between"
                    style={{ width: "100%" }}
                >
                    <Menu
                        mode="horizontal"
                        style={{
                            flex: 10,
                            maxWidth: 400,
                            minWidth: 0,
                            border: "none"
                        }}
                        defaultSelectedKeys={[currentActiveKey()]}
                        items={[
                            {
                                key: "home",
                                label: (
                                    <NavLink to="/worklenz/home">
                                        <Typography.Text strong>
                                            Home
                                        </Typography.Text>
                                    </NavLink>
                                )
                            },
                            {
                                key: "projects",
                                label: (
                                    <NavLink to="/worklenz/projects">
                                        <Typography.Text strong>
                                            Projects
                                        </Typography.Text>
                                    </NavLink>
                                )
                            },
                            {
                                key: "schedules",
                                label: (
                                    <NavLink to="/worklenz/schedules">
                                        <Typography.Text strong>
                                            Schedules
                                        </Typography.Text>
                                    </NavLink>
                                )
                            },
                            {
                                key: "reporting",
                                label: (
                                    <NavLink to="/worklenz/reporting">
                                        <Typography.Text strong>
                                            Reporting
                                        </Typography.Text>
                                    </NavLink>
                                )
                            }
                        ]}
                    />
                    <Flex gap={8} align="center">
                        <Button
                            style={{
                                backgroundColor: "#fde8b5",
                                color: "black"
                            }}
                        >
                            Upgrade plan
                        </Button>
                        <Tooltip title="Add Team Member">
                            <Button
                                type="dashed"
                                icon={<UsergroupAddOutlined />}
                                style={{
                                    color: "#1890ff",
                                    borderColor: "#1890ff"
                                }}
                            >
                                Invite
                            </Button>
                        </Tooltip>
                        <Tooltip title="Switch Team">
                            <Dropdown menu={{ items }} trigger={["click"]}>
                                <Button
                                    shape="round"
                                    icon={<BankOutlined />}
                                    style={{
                                        color: "#1890ff",
                                        backgroundColor: "#ccefff",
                                        borderColor: "#1890ff"
                                    }}
                                >
                                    Sachintha Prasad
                                    <DownOutlined />
                                </Button>
                            </Dropdown>
                        </Tooltip>
                        <Tooltip title="Help">
                            <Button
                                shape="circle"
                                icon={<QuestionCircleOutlined />}
                                size="large"
                                style={{
                                    border: "none",
                                    boxShadow: "none"
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="Notification">
                            <Button
                                shape="circle"
                                icon={<BellOutlined />}
                                size="large"
                                style={{
                                    border: "none",
                                    boxShadow: "none"
                                }}
                            />
                        </Tooltip>
                        <Tooltip title="Profile">
                            <Button
                                shape="circle"
                                icon={<UserOutlined />}
                                size="large"
                                style={{
                                    border: "none",
                                    boxShadow: "none"
                                }}
                            />
                        </Tooltip>
                    </Flex>
                </Flex>
            )}

            {isTablet && !isDesktop && (
                <Flex gap={8} align="center">
                    <Dropdown menu={{ items }} trigger={["click"]}>
                        <Button
                            shape="round"
                            icon={<BankOutlined />}
                            style={{
                                color: "#1890ff",
                                backgroundColor: "#ccefff",
                                borderColor: "#1890ff"
                            }}
                        >
                            Sachintha Prasad
                            <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Tooltip title="Notification">
                        <Button
                            shape="circle"
                            icon={<BellOutlined />}
                            size="large"
                            style={{ border: "none", boxShadow: "none" }}
                        />
                    </Tooltip>
                    <Tooltip title="Profile">
                        <Button
                            shape="circle"
                            icon={<UserOutlined />}
                            size="large"
                            style={{ border: "none", boxShadow: "none" }}
                        />
                    </Tooltip>

                    <Button
                        shape="circle"
                        icon={<MenuOutlined />}
                        size="large"
                        style={{ border: "none", boxShadow: "none" }}
                        onClick={handleMenuToggle}
                    />
                </Flex>
            )}

            {isMobile && (
                <Flex align="center">
                    <Tooltip title="Notification">
                        <Button
                            shape="circle"
                            icon={<BellOutlined />}
                            size="large"
                            style={{ border: "none", boxShadow: "none" }}
                        />
                    </Tooltip>
                    <Tooltip title="Profile">
                        <Button
                            shape="circle"
                            icon={<UserOutlined />}
                            size="large"
                            style={{ border: "none", boxShadow: "none" }}
                        />
                    </Tooltip>

                    <Button
                        shape="circle"
                        icon={<MenuOutlined />}
                        size="large"
                        style={{ border: "none", boxShadow: "none" }}
                        onClick={handleMenuToggle}
                    />
                </Flex>
            )}

            <Drawer open={isMenuOpen} onClose={handleMenuToggle}>
                <Flex>
                    <Menu
                        style={{
                            flex: 10,
                            maxWidth: 400,
                            minWidth: 0,
                            border: "none"
                        }}
                        onClick={handleMenuToggle}
                        defaultSelectedKeys={[currentActiveKey()]}
                        items={[
                            {
                                key: "home",
                                label: (
                                    <NavLink to="/worklenz/home">
                                        <Typography.Text strong>
                                            Home
                                        </Typography.Text>
                                    </NavLink>
                                )
                            },
                            {
                                key: "projects",
                                label: (
                                    <NavLink to="/worklenz/projects">
                                        <Typography.Text strong>
                                            Projects
                                        </Typography.Text>
                                    </NavLink>
                                )
                            },
                            {
                                key: "schedules",
                                label: (
                                    <NavLink to="/worklenz/schedules">
                                        <Typography.Text strong>
                                            Schedules
                                        </Typography.Text>
                                    </NavLink>
                                )
                            },
                            {
                                key: "reporting",
                                label: (
                                    <NavLink to="/worklenz/reporting">
                                        <Typography.Text strong>
                                            Reporting
                                        </Typography.Text>
                                    </NavLink>
                                )
                            },
                            {
                                key: "help",
                                label: (
                                    <NavLink to="/worklenz/help">
                                        <Typography.Text strong>
                                            Help
                                        </Typography.Text>
                                    </NavLink>
                                )
                            },
                            {
                                key: "plans",
                                style: {
                                    padding: 0,
                                    backgroundColor: "transparent"
                                },
                                label: (
                                    <Button
                                        style={{
                                            backgroundColor: "#fde8b5",
                                            color: "black",
                                            width: "100%"
                                        }}
                                    >
                                        Upgrade Plan
                                    </Button>
                                )
                            }
                        ]}
                    />
                </Flex>
            </Drawer>
        </Col>
    )
}

export default Navbar
