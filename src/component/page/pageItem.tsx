import { withRouter } from "react-router-dom";


const PageItem = (props: any) => {

    const go = (pageId: number) => {
        props.history.push({
            pathname: '/row',
            state: {
                pageId
            }
        })
    }
    return (
        <div>
            <div>{props.item.name}</div>
            <button onClick={
                () => {
                    const pageId = props.item.id
                    go(pageId)
                }
            }>go</button>
        </div>
    )
}

export default withRouter(PageItem)