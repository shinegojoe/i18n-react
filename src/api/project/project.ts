import instance from '../instance'
import { AxiosRequestConfig} from 'axios';
import apiString from '../apiString'



const list = async() => {
    const cfg: AxiosRequestConfig = {
        method: 'GET',
        url: apiString.project,
    }
    const res = await instance.run(cfg)
    return res
}

const add = async(name: string) => {
    const cfg: AxiosRequestConfig = {
        method: 'POST',
        url: apiString.project,
        data: {
            name: name,
            coverPhoto: ''
        }
    }
    const res = await instance.run(cfg)
    return res
}

const del = async(id: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'DELETE',
        url: `${apiString.project}/${id}`,
    }
    const res = await instance.run(cfg)
    return res
}

export default { list, add, del }