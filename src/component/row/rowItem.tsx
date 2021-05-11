import { useState, useEffect } from 'react'
import item from '../../api/shop/item'
import langApi from '../../api/language/language'
import textApi from '../../api/text/text'
import style from '../../sass/rowPage/rowPage.module.sass'
import TextField from '@material-ui/core/TextField'

const RowItem = (props: any) => {
    console.log('row props', props)
    
    const [name, setName] = useState('')
    const [textMap, setTextMap] = useState<any>({})
    const [langList, setLangList] = useState<any>([])
    const [currentKey, setCurrentKey] = useState('')

    useEffect(()=> {
        console.log('uuu', props)
        setName(props.item.name)
        setTextMap(props.item.text)
        setLangList(props.langList)
    }, [props])

    const textUpdate = (e: any, key: string) => {
        // console.log('key', key)
        const val = e.target.value
        // console.log('val', val)
        const newText = {...textMap}
        // console.log('newText', newText)
        newText[key] = val
        setTextMap(newText)
        setCurrentKey(key)
    }

    const langNameToId = (name: any) => {
        for (const item of langList) {
            if(name === item.name) {
                return item.id
            }
        }  
    }

    const saveText = async() => {
        const text = textMap[currentKey]
        const data = {
            langId: langNameToId(currentKey),
            text: text,
            rowId: props.item.id
        }
        const res = await textApi.update(data)
        return res
    }

    const onBlur = () => {
        const res = saveText()
    }

    
    return (
        <div className={style.rowWrapper}>
            <div>{name}</div>
            <div className={style.textWrapper}>{langList.map((item: any, index: number)=> {
                const key = item.name
                return <TextField 
                    key={index}
                    onBlur={onBlur}
                    onChange={(e)=> {textUpdate(e, key)}}
                    defaultValue={textMap[key]}></TextField>
            })}</div>
        
        </div>
    )
}

export default RowItem