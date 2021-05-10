import { useState, useEffect } from 'react'
import rowApi from '../../api/row/row'
import RowItem from './rowItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const Row = (props: any) => {
    console.log('pp', props)
    const [ rowList, setRowList ] = useState([])
    useEffect(()=> {
        getRowList()        

    }, [])

    const getRowList = async() => {
        const pageId = props.location.state.pageId
        const res = await rowApi.list(pageId)
        console.log(res)
        setRowList(res.data)
    }

    return (
        <div>
            <div>
                <TextField></TextField>
                <Button>add</Button>
            </div>
            {rowList.map((item, index)=> {
                return <RowItem key={index} item={item}></RowItem>
            })}
        </div>
    )
}

export default Row