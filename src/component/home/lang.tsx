import { useEffect, useState } from 'react'
import langApi from '../../api/language/language'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const Language = () => {
    const [langList, setLangList] = useState([])
    const [lang, setLang] = useState('')

    useEffect(() => {
        getLangList()
    }, [])

    const getLangList = async () => {
        const res = await langApi.list()
        console.log('lang list', res)
        setLangList(res.data)
    }

    const addLangClick = async () => {
        const res = await langApi.add(lang)
        getLangList()
    }

    const langTextUpdate = (e: any) => {
        setLang(e.target.value)
    }

    const delLangClick = async (id: number) => {
        const res = await langApi.del(id)
        getLangList()
    }

    return (
        <div>
            <div>
                <Button onClick={addLangClick}>add language</Button>
                <TextField onChange={langTextUpdate}></TextField>
            </div>
            <div>{langList.map((item: any, index) => {

                return <div key={index}>
                    <div>{item.name}</div>
                    <Button onClick={
                        () => {
                            delLangClick(item.id)
                        }
                    }>del</Button>
                </div>
            })}</div>
        </div>
    )
}

export default Language