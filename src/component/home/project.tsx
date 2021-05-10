import { useEffect, useState } from 'react'
import ProjectItem from './projectItem'
import projectApi from '../../api/project/project'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const Project = () => {

    const [projectList, setProjectList] = useState([])
    const [projectName, setProjectName] = useState('')

    useEffect(() => {
        getProjectList()
    }, [])

    const getProjectList = async () => {
        const res = await projectApi.list()
        console.log(res)
        setProjectList(res.data)
    }

    const addClick = async () => {
        console.log(projectName)
        const res = await projectApi.add(projectName)
        getProjectList()
        setProjectName('')

    }

    const textUpdate = (e: any) => {
        // console.log(e.target.value)
        setProjectName(e.target.value)
    }

    return (
        <div>
            <div>
                <Button onClick={addClick}>add</Button>
                <TextField onChange={textUpdate} id="standard-basic" label="Standard" />
            </div>
            <div>
                {projectList.map((item, index) => {
                    return <ProjectItem
                        key={index}
                        item={item}
                        getProjectList={getProjectList}>
                    </ProjectItem>
                })}
            </div>
        </div>
    )
}

export default Project