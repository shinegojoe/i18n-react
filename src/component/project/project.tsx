import { useEffect, useState } from 'react'
import ProjectItem from '../project/projectItem'
import projectApi from '../../api/project/project'


const Project = () => {

    const [projectList, setProjectList] = useState([])

    useEffect(()=> {
        getProjectList()
    }, [])

    const getProjectList = async() => {
        const res = await projectApi.list()
        console.log(res)
        setProjectList(res.data)
    }

    return (
        <div>
            <div>add</div>
            <div>
                {projectList.map((item, index)=> {
                    return <ProjectItem key={index} item={item}></ProjectItem>
                })}
            </div>

        </div>
    )
}

export default Project