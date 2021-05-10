import { useEffect, useState } from 'react'
import pageApi from '../../api/page/page'
import { withRouter } from "react-router-dom"
import PageItem from './pageItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Page = (props: any) => {
    console.log(props)
    const [pageList, setPageList] = useState([])
    const [ pageName, setPageName ] = useState('')
    const projectId = props.location.state.projectId

    useEffect(()=> {
        getPageList()
    }, [])

    const getPageList = async() => {
        // const projectId = props.location.state.projectId
        const res = await pageApi.list(projectId)
        setPageList(res.data)
    }

    const addClick = async() => {
        const res = await pageApi.add(pageName, projectId)
        getPageList()
    }

    const textUpdate = (e: any) => {
        setPageName(e.target.value)
    }


    return (
        <div>
            page
            <div>
                <TextField onChange={textUpdate}></TextField>
                <Button onClick={addClick}>add</Button>
            </div>
            {pageList.map((item: any, index)=> {
                return <PageItem key={index} item={item}></PageItem>
            })}
        </div>
    )
}

export default withRouter(Page)