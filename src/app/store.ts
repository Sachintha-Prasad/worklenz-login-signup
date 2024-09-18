import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../features/theme/themeSlice"
import localesReducer from "../features/locales/localesSlice"

export const store = configureStore({
    reducer: {
        themeReducer: themeReducer,
        localesReducer: localesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
