import { Badge, Drawer, Form, Input, Select, Typography } from 'antd'
import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { toggleDrawer } from './projectSlice'
import {
    BlockOutlined,
    CheckCircleTwoTone,
    ClockCircleOutlined,
    ClockCircleTwoTone,
    CloseCircleTwoTone,
    StopOutlined,
} from '@ant-design/icons'
import { colors } from '../../styles/colors'

const CreateProject = () => {
    const isDrawerOpen = useAppSelector(
        (state) => state.projectReducer.isDrawerOpen
    )
    const dispatch = useAppDispatch()

    const [form] = Form.useForm()

    const statusOptions = [
        {
            key: 'cancelled',
            label: (
                <Typography.Text>
                    <CloseCircleTwoTone twoToneColor={colors.vibrantOrange} />{' '}
                    Cancelled
                </Typography.Text>
            ),
        },
        {
            key: 'blocked',
            label: (
                <Typography.Text>
                    <StopOutlined /> Blocked
                </Typography.Text>
            ),
        },
        {
            key: 'onHold',
            label: (
                <Typography.Text>
                    <StopOutlined /> On Hold
                </Typography.Text>
            ),
        },
        {
            key: 'proposed',
            label: (
                <Typography.Text>
                    <ClockCircleOutlined /> Proposed
                </Typography.Text>
            ),
        },
        {
            key: 'inPlanning',
            label: (
                <Typography.Text>
                    <ClockCircleOutlined /> In Planning
                </Typography.Text>
            ),
        },
        {
            key: 'inProgress',
            label: (
                <Typography.Text>
                    <ClockCircleTwoTone twoToneColor={colors.limeGreen} /> In
                    Progress
                </Typography.Text>
            ),
        },
        {
            key: 'Completed',
            label: (
                <Typography.Text>
                    <CheckCircleTwoTone twoToneColor={colors.limeGreen} />{' '}
                    Completed
                </Typography.Text>
            ),
        },
        {
            key: 'continuos',
            label: (
                <Typography.Text>
                    <ClockCircleTwoTone twoToneColor={colors.limeGreen} />{' '}
                    Continuos
                </Typography.Text>
            ),
        },
    ]

    const healthOptions = [
        {
            key: 'notSet',
            label: (
                <Typography.Text style={{ display: 'flex', gap: 4 }}>
                    <Badge color={colors.paleBlue} /> Not Set
                </Typography.Text>
            ),
        },
        {
            key: 'needAttention',
            label: (
                <Typography.Text style={{ display: 'flex', gap: 4 }}>
                    <Badge color={colors.lightBeige} />
                    Need Attention
                </Typography.Text>
            ),
        },
        {
            key: 'atRish',
            label: (
                <Typography.Text style={{ display: 'flex', gap: 4 }}>
                    <Badge color={colors.vibrantOrange} /> At Risk
                </Typography.Text>
            ),
        },
        {
            key: 'good',
            label: (
                <Typography.Text style={{ display: 'flex', gap: 4 }}>
                    <Badge color={colors.limeGreen} /> Good
                </Typography.Text>
            ),
        },
    ]

    return (
        <Drawer
            title={
                <Typography.Text style={{ fontWeight: 500, fontSize: 16 }}>
                    Create Project
                </Typography.Text>
            }
            open={isDrawerOpen}
            onClose={() => dispatch(toggleDrawer())}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter a Name',
                        },
                    ]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item label="Status" name="status">
                    <Select defaultValue={'Proposed'} options={statusOptions} />
                </Form.Item>
                <Form.Item label="Health" name="health">
                    <Select defaultValue={'Not Set'} options={healthOptions} />
                </Form.Item>
            </Form>
        </Drawer>
    )
}

export default CreateProject
