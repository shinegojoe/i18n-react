import instance from '../instance'
import { AxiosRequestConfig} from 'axios';
import apiString from '../apiString'



const list = async(pageId: number) => {
    const cfg: AxiosRequestConfig  = {
        method: 'GET',
        url: apiString.rowTextData,
        params: {
            pageId
        }
    }
    const res = await instance.run(cfg)
    return res
}

const add = async(data: any) => {
    const cfg: AxiosRequestConfig = {
        method: 'POST',
        url: apiString.rowTextData,
        data
    }
    const res = await instance.run(cfg)
    return res
}

const del = async(id: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'DELETE',
        url: `${apiString.rowTextData}/${id}`
    }
    const res = await instance.run(cfg)
    return res
    
}

export default { list, add, del }