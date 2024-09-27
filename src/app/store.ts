import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice'
import localesReducer from '../features/i18n/localesSlice'
import projectReducer from '../features/projects/projectSlice'
import notificationReducer from '../features/navbar/notification/notificationSlice'
import addMemberReducer from '../features/navbar/addMember/addMemberSlice'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: {
        themeReducer: themeReducer,
        localesReducer: localesReducer,
        projectReducer: projectReducer,
        notificationReducer: notificationReducer,
        addMemberReducer: addMemberReducer,
        todoReducer: todoReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
