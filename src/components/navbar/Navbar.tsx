import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
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
    Typography,
} from 'antd'
import { NavLink, useLocation } from 'react-router-dom'
import {
    BankOutlined,
    BellOutlined,
    CheckCircleTwoTone,
    ClockCircleOutlined,
    DownOutlined,
    HomeOutlined,
    MenuOutlined,
    ProjectOutlined,
    QuestionCircleOutlined,
    ReadOutlined,
    UsergroupAddOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'
import { colors } from '../../styles/colors'
import { useTranslation } from 'react-i18next'
import NotificationButton from '../../features/notification/NotificationButton'
import NotficationDrawer from '../../features/notification/NotficationDrawer'

const Navbar = () => {
    const location = useLocation()

    // Localization
    const { t } = useTranslation('navbar')

    // Mobile nav menu
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuToggle = () => setIsMenuOpen((prevState) => !prevState)

    // Media queries from react-responsive package
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 576px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

    // Function for setting the key of the current active nav link
    const currentActiveKey = () => {
        if (location.pathname.includes('/home')) return 'home'
        if (location.pathname.includes('/projects')) return 'projects'
        if (location.pathname.includes('/schedules')) return 'schedules'
        if (location.pathname.includes('/reporting')) return 'reporting'
        return 'path not matched'
    }

    // Switch teams dropdown items
    const items = [
        {
            key: '0',
            label: (
                <Space>
                    <Avatar
                        size="small"
                        style={{ backgroundColor: colors.vibrantOrange }}
                    >
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
                    <CheckCircleTwoTone twoToneColor={colors.limeGreen} />
                </Space>
            ),
        },
    ]

    return (
        <Col
            style={{
                width: '100%',
                display: 'flex',
                paddingInline: isDesktop ? 48 : 24,
                gap: 12,
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {/* Logo */}
            <img
                src={logo}
                alt={t('logoAlt')}
                style={{ width: '100%', maxWidth: 140 }}
            />
            {isDesktop && (
                <Flex
                    align="center"
                    justify="space-between"
                    style={{ width: '100%' }}
                >
                    <Menu
                        mode="horizontal"
                        style={{
                            flex: 10,
                            maxWidth: 400,
                            minWidth: 0,
                            border: 'none',
                        }}
                        defaultSelectedKeys={[currentActiveKey()]}
                        items={[
                            {
                                key: 'home',
                                label: (
                                    <NavLink to="/worklenz/home">
                                        <Typography.Text strong>
                                            {t('home')}
                                        </Typography.Text>
                                    </NavLink>
                                ),
                            },
                            {
                                key: 'projects',
                                label: (
                                    <NavLink to="/worklenz/projects">
                                        <Typography.Text strong>
                                            {t('projects')}
                                        </Typography.Text>
                                    </NavLink>
                                ),
                            },
                            {
                                key: 'schedules',
                                label: (
                                    <NavLink to="/worklenz/schedules">
                                        <Typography.Text strong>
                                            {t('schedules')}
                                        </Typography.Text>
                                    </NavLink>
                                ),
                            },
                            {
                                key: 'reporting',
                                label: (
                                    <NavLink to="/worklenz/reporting">
                                        <Typography.Text strong>
                                            {t('reporting')}
                                        </Typography.Text>
                                    </NavLink>
                                ),
                            },
                        ]}
                    />
                    <Flex gap={16} align="center">
                        <Button
                            style={{
                                backgroundColor: colors.lightBeige,
                                color: 'black',
                            }}
                        >
                            {t('upgradePlan')}
                        </Button>
                        <Tooltip title={t('inviteTooltip')}>
                            <Button
                                type="dashed"
                                icon={<UsergroupAddOutlined />}
                                style={{
                                    color: colors.skyBlue,
                                    borderColor: colors.skyBlue,
                                }}
                            >
                                {t('invite')}
                            </Button>
                        </Tooltip>
                        <Tooltip title={t('switchTeamTooltip')}>
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <Button
                                    shape="round"
                                    size="large"
                                    icon={<BankOutlined />}
                                    style={{
                                        color: colors.skyBlue,
                                        backgroundColor: colors.paleBlue,
                                        border: 'none',
                                        fontWeight: 500,
                                    }}
                                >
                                    Sachintha Prasad
                                    <DownOutlined />
                                </Button>
                            </Dropdown>
                        </Tooltip>
                        <Tooltip title={t('notificationTooltip')}>
                            <NotificationButton />
                        </Tooltip>
                        <Tooltip title={t('help')}>
                            <Button
                                shape="circle"
                                size="large"
                                style={{
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                                children={
                                    <QuestionCircleOutlined
                                        style={{ fontSize: 20 }}
                                    />
                                }
                            />
                        </Tooltip>
                        <Tooltip title={t('profileTooltip')}>
                            <Button
                                shape="circle"
                                size="large"
                                style={{
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                                children={
                                    <UserOutlined style={{ fontSize: 20 }} />
                                }
                            />
                        </Tooltip>
                    </Flex>
                </Flex>
            )}

            {isTablet && !isDesktop && (
                <Flex gap={8} align="center">
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <Button
                            shape="round"
                            size="large"
                            icon={<BankOutlined />}
                            style={{
                                color: colors.skyBlue,
                                backgroundColor: colors.paleBlue,
                                border: 'none',
                                fontWeight: 500,
                            }}
                        >
                            Sachintha Prasad
                            <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Tooltip title={t('notificationTooltip')}>
                        <NotificationButton />
                    </Tooltip>
                    <Tooltip title={t('profileTooltip')}>
                        <Button
                            shape="circle"
                            size="large"
                            style={{ border: 'none', boxShadow: 'none' }}
                            children={<UserOutlined style={{ fontSize: 20 }} />}
                        />
                    </Tooltip>

                    <Button
                        shape="circle"
                        size="large"
                        style={{ border: 'none', boxShadow: 'none' }}
                        onClick={handleMenuToggle}
                        children={<MenuOutlined style={{ fontSize: 20 }} />}
                    />
                </Flex>
            )}

            {isMobile && (
                <Flex align="center">
                    <Tooltip title={t('notificationTooltip')}>
                        <NotificationButton />
                    </Tooltip>
                    <Tooltip title={t('profileTooltip')}>
                        <Button
                            shape="circle"
                            size="large"
                            style={{ border: 'none', boxShadow: 'none' }}
                            children={<UserOutlined style={{ fontSize: 20 }} />}
                        />
                    </Tooltip>

                    <Button
                        shape="circle"
                        size="large"
                        style={{ border: 'none', boxShadow: 'none' }}
                        onClick={handleMenuToggle}
                        children={<MenuOutlined style={{ fontSize: 20 }} />}
                    />
                </Flex>
            )}

            {/* notification drawer */}
            <NotficationDrawer />

            {/* mobile menu drawer  */}
            <Drawer open={isMenuOpen} onClose={handleMenuToggle}>
                <Flex>
                    <Menu
                        style={{
                            flex: 10,
                            maxWidth: 400,
                            minWidth: 0,
                            border: 'none',
                        }}
                        onClick={handleMenuToggle}
                        defaultSelectedKeys={[currentActiveKey()]}
                        items={[
                            {
                                key: 'home',
                                label: (
                                    <NavLink to="/worklenz/home">
                                        <Typography.Text strong>
                                            {t('home')}
                                        </Typography.Text>
                                    </NavLink>
                                ),
                                icon: <HomeOutlined />,
                            },
                            {
                                key: 'projects',
                                label: (
                                    <NavLink to="/worklenz/projects">
                                        <Typography.Text strong>
                                            {t('projects')}
                                        </Typography.Text>
                                    </NavLink>
                                ),
                                icon: <ProjectOutlined />,
                            },
                            {
                                key: 'schedules',
                                label: (
                                    <NavLink to="/worklenz/schedules">
                                        <Typography.Text strong>
                                            {t('schedules')}
                                        </Typography.Text>
                                    </NavLink>
                                ),
                                icon: <ClockCircleOutlined />,
                            },
                            {
                                key: 'reporting',
                                label: (
                                    <NavLink to="/worklenz/reporting">
                                        <Typography.Text strong>
                                            {t('reporting')}
                                        </Typography.Text>
                                    </NavLink>
                                ),
                                icon: <ReadOutlined />,
                            },
                            {
                                key: 'help',
                                label: (
                                    <NavLink to="/worklenz/help">
                                        <Typography.Text strong>
                                            {t('help')}
                                        </Typography.Text>
                                    </NavLink>
                                ),
                                icon: <QuestionCircleOutlined />,
                            },
                            {
                                key: 'plans',
                                style: {
                                    padding: 0,
                                    backgroundColor: 'transparent',
                                },
                                label: (
                                    <Button
                                        style={{
                                            backgroundColor: colors.lightBeige,
                                            color: 'black',
                                            width: '100%',
                                        }}
                                    >
                                        {t('upgradePlan')}
                                    </Button>
                                ),
                            },
                        ]}
                    />
                </Flex>
            </Drawer>
        </Col>
    )
}

export default Navbar
