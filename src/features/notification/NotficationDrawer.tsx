import { Drawer, Empty, Segmented, Typography } from 'antd'
import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { toggleDrawer } from './notificationSlice'

const NotficationDrawer = () => {
    const isDrawerOpen = useAppSelector(
        (state) => state.notificationReducer.isDrawerOpen
    )
    const dispatch = useAppDispatch()

    return (
        <Drawer open={isDrawerOpen} onClose={() => dispatch(toggleDrawer())}>
            <Segmented<string>
                options={['Unread', 'Read']}
                defaultValue="Unread"
            />

            <Empty
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBlockStart: 32,
                }}
                description={
                    <Typography.Text>
                        You've read all your notifications
                    </Typography.Text>
                }
            />
        </Drawer>
    )
}

export default NotficationDrawer
