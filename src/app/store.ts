import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../features/theme/themeSlice"
import localesReducer from "../features/locales/localesSlice"
import projectReducer from "../features/projects/projectSlice"

export const store = configureStore({
    reducer: {
        themeReducer: themeReducer,
        localesReducer: localesReducer,
        projectReducer: projectReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
