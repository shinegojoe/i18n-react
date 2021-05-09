import { useEffect, useState } from 'react'
import pageApi from '../../api/page/page'
import { withRouter } from "react-router-dom"
import PageItem from './pageItem'

const Page = (props: any) => {
    console.log(props)
    const [pageList, setPageList] = useState([])
    useEffect(()=> {
        getPageList()
    }, [])

    const getPageList = async() => {
        const projectId = props.location.state.projectId
        const res = await pageApi.list(projectId)
        setPageList(res.data)
    }
    return (
        <div>
            page
            {pageList.map((item: any, index)=> {
                return <PageItem key={index} item={item}></PageItem>
            })}
        </div>
    )
}

export default withRouter(Page)