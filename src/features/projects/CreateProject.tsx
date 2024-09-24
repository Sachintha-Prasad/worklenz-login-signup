import { Drawer } from "antd"
import React from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { toggleDrawer } from "./projectSlice"

const CreateProject = () => {
    const isDrawerOpen = useAppSelector(
        (state) => state.projectReducer.isDrawerOpen
    )
    const dispatch = useAppDispatch()

    return (
        <Drawer open={isDrawerOpen} onClose={() => dispatch(toggleDrawer())}>
            Create Project Form
        </Drawer>
    )
}

export default CreateProject
