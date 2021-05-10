import { useEffect, useState } from 'react'
import pageApi from '../../api/page/page'
import projectLangApi from '../../api/language/projectLang'
import { withRouter } from "react-router-dom"
import PageItem from './pageItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddLang from './addLang'


const Page = (props: any) => {
    console.log(props)
    const [pageList, setPageList] = useState([])
    const [projectLangList, setProjectLangList] = useState([])
    const [ pageName, setPageName ] = useState('')
   
    const projectId = props.location.state.projectId

    useEffect(()=> {
        getPageList()
        getProjectLangList()
    }, [])

    const getPageList = async() => {
        // const projectId = props.location.state.projectId
        const res = await pageApi.list(projectId)
        setPageList(res.data)
    }

    const getProjectLangList = async() => {
        const res = await projectLangApi.list()
        console.log(res)
        setProjectLangList(res.data)
        
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
            <div>
                <AddLang projectId={projectId} getProjectLangList={getProjectLangList}></AddLang>
            </div>
            <div>{projectLangList.map((item: any, index: number)=> {
                return <div>{item.langId}</div>
            })}</div>
            
            <div>
                <TextField onChange={textUpdate}></TextField>
                <Button onClick={addClick}>add page</Button>
            </div>
            {pageList.map((item: any, index)=> {
                return <PageItem key={index} item={item} getPageList={getPageList}></PageItem>
            })}
        </div>
    )
}

export default withRouter(Page)