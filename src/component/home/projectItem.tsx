import { withRouter } from "react-router-dom"
import projectApi from '../../api/project/project'


const ProjectItem = (props: any) => {
    // console.log('pppp', props)
    const go = (id: number) => {
        props.history.push({
            pathname: '/page',
            state: {
                projectId: id
            }
        })
    }

    const delClick = async()=> {
        const id = props.item.id
        console.log(id)
        const res = await projectApi.del(id)
        props.getProjectList()
    }

    return (
        <div>
            <div>
                {props.item.name}
                <button onClick={()=> {
                    const id = props.item.id
                    go(id)
                }}>go</button>
                <button onClick={delClick}>del</button>
            </div>
        </div>
    )
}

export default withRouter(ProjectItem)