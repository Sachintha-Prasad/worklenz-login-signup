import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice'
import localesReducer from '../features/i18n/localesSlice'
import projectReducer from '../features/projects/projectSlice'
import notificationReducer from '../features/notification/notificationSlice'

export const store = configureStore({
    reducer: {
        themeReducer: themeReducer,
        localesReducer: localesReducer,
        projectReducer: projectReducer,
        notificationReducer: notificationReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
