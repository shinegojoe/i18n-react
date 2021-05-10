
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import langApi from '../../api/language/language'
import projectLangApi from '../../api/language/projectLang';


const AddLang = (props: any) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [langList, setLangList] = useState([])
    const projectId = props.projectId

    useEffect(()=>{
        getLangList()
    }, [])

    const getLangList = async() => {
        const res = await langApi.list()
        setLangList(res.data)
    }

    const addProjectLang = async(langId: number) => {
        const res = await projectLangApi.add(projectId, langId)
        props.getProjectLangList()

    }

    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    }
  
    const handleClose = () => {
      setAnchorEl(null);
    }

    const itemClick = (e: any, item: any) => {
        console.log(item)
        console.log('projectId', props.projectId)
        addProjectLang(item.id)
        setAnchorEl(null);
    }

    return (
        <div>
             <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {langList.map((item: any, index: number)=> {
                    return <MenuItem key={index} onClick={(e)=>{itemClick(e, item)}}>{item.name}</MenuItem>

                })}
             
            </Menu>
        </div>
    )
}

export default AddLang