import { withRouter } from "react-router-dom";


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

    return (
        <div>
            <div>
                {props.item.name}
                <button onClick={()=> {
                    const id = props.item.id
                    go(id)
                }}>go</button>
            </div>
        </div>
    )
}

export default withRouter(ProjectItem)