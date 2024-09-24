import { createSlice } from "@reduxjs/toolkit"
import { Project } from "../../types/project"

type ProjectState = {
    projects: Project[]
    isDrawerOpen: boolean
}

const initialState: ProjectState = {
    projects: [],
    isDrawerOpen: false
}

const projectSlice = createSlice({
    name: "project reducer",
    initialState,
    reducers: {
        toggleDrawer: (state) => {
            state.isDrawerOpen
                ? (state.isDrawerOpen = false)
                : (state.isDrawerOpen = true)
        }
    }
})

export const { toggleDrawer } = projectSlice.actions
export default projectSlice.reducer
