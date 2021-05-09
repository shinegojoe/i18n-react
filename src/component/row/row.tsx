import { useState, useEffect } from 'react'
import rowApi from '../../api/row/row'
import RowItem from './rowItem'


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
            {rowList.map((item, index)=> {
                return <RowItem key={index} item={item}></RowItem>
            })}
        </div>
    )
}

export default Row