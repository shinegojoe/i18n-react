import pageApi from '../../api/page/page'
import { withRouter } from "react-router-dom"


const PageItem = (props: any) => {
    const pageId = props.item.id
    const projectId = props.projectId

    const go = (pageId: number) => {
        props.history.push({
            pathname: '/row',
            state: {
                pageId,
                projectId
            }
        })
    }

    const delClick = async() => {
        const res = await pageApi.del(pageId)
        props.getPageList()

    }

    return (
        <div>
            <div>{props.item.name}</div>
            <button onClick={
                () => {
                    // const pageId = props.item.id
                    go(pageId)
                }
            }>go</button>
            <button onClick={delClick}>del</button>
        </div>
    )
}

export default withRouter(PageItem)