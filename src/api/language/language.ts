import instance from '../instance'
import { AxiosRequestConfig} from 'axios'
import apiString from '../apiString'


const list = async() => {
    const cfg: AxiosRequestConfig  = {
        method: 'GET',
        url: apiString.lang
    }
    const res = await instance.run(cfg)
    return res
}

const add = async(name: string) => {
    const cfg: AxiosRequestConfig = {
        method: 'POST',
        url: apiString.lang,
        data: {
            name
        }
    }
    const res = await instance.run(cfg)
    return res
}

const del = async(id: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'DELETE',
        url: `${apiString.lang}/${id}`,
    }
    const res = await instance.run(cfg)
    return res
}

export default { list, add, del }