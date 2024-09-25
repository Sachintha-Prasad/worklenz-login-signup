import React from 'react'
import TitleHomepage from './TitleHomepage'
import CreateProject from '../../features/projects/CreateProject'

import ToDoTable from './ToDoTable'
import ProjectsTable from './ProjectsTable'
import TasksTable from './TasksTable'

const Homepage = () => {
    return (
        <div style={{ marginBlock: 96, minHeight: '90vh' }}>
            <TitleHomepage />

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
                <div className="md:col-span-2 lg:row-span-full">
                    <TasksTable />
                </div>

                <ToDoTable />
                <ProjectsTable />
            </div>

            <CreateProject />
        </div>
    )
}

export default Homepage
