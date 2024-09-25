import { BellOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { toggleDrawer } from './notificationSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const NotificationButton = () => {
    const dispatch = useAppDispatch()

    return (
        <Button
            shape="circle"
            size="large"
            style={{
                border: 'none',
                boxShadow: 'none',
            }}
            onClick={() => dispatch(toggleDrawer())}
            children={<BellOutlined style={{ fontSize: 20 }} />}
        />
    )
}

export default NotificationButton
