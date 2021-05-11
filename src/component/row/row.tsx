import { useState, useEffect } from 'react'
import rowApi from '../../api/row/row'
import projectLang from '../../api/language/projectLang'
import RowItem from './rowItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'




const Row = (props: any) => {
    console.log('row props', props)
    const pageId = props.location.state.pageId
    const projectId = props.location.state.projectId

    const [ rowList, setRowList ] = useState([])
    const [ langList, setLangList] = useState([])
    const [ rowName, setRowName ] = useState('')

    useEffect(()=> {
        getRowList()  
        getLangList()      

    }, [])

    const getRowList = async() => {
        const res = await rowApi.list(pageId)
        console.log('xxx', res)
        setRowList(res.data)
    }

    const getLangList = async() => {
        const res = await projectLang.list(projectId)
        setLangList(res.data)
    }

    const rowNameUpdate = (e: any) => {
        const val = e.target.value
        setRowName(val)
    }

    const addNewRow = async() => {
        const data = {
            langList: langList,
            name: rowName,
            pageId: pageId
        }
        const res = await rowApi.add(data)
        getRowList()

    }



    return (
        <div>
            <div>
                <TextField onChange={rowNameUpdate}></TextField>
                <Button onClick={addNewRow}>add</Button>
            </div>
            <div>
                {langList.map((item: any, index: number)=> {
                    return <div key={index}>{item.name}</div>
                })}
            </div>
            {rowList.map((item, index)=> {
                return <RowItem key={index} 
                item={item} 
                getRowList={getRowList}
                langList={langList}></RowItem>
            })}
        </div>
    )
}

export default Row