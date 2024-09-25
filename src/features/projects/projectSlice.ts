import { createSlice } from '@reduxjs/toolkit'
import { ProjectType } from '../../types/project'

type ProjectState = {
    projects: ProjectType[]
    isDrawerOpen: boolean
}

const initialState: ProjectState = {
    projects: [],
    isDrawerOpen: false,
}

const projectSlice = createSlice({
    name: 'project reducer',
    initialState,
    reducers: {
        toggleDrawer: (state) => {
            state.isDrawerOpen
                ? (state.isDrawerOpen = false)
                : (state.isDrawerOpen = true)
        },
    },
})

export const { toggleDrawer } = projectSlice.actions
export default projectSlice.reducer
