import { BellOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'
import { toggleDrawer } from './notificationSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTranslation } from 'react-i18next'

const NotificationButton = () => {
    const dispatch = useAppDispatch()

    // Localization
    const { t } = useTranslation('navbar')

    return (
        <Tooltip title={t('notificationTooltip')} trigger={'hover'}>
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
        </Tooltip>
    )
}

export default NotificationButton
