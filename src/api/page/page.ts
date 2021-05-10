import instance from '../instance'
import { AxiosRequestConfig} from 'axios';
import apiString from '../apiString'



const list = async(projectId: number) => {
    const cfg: AxiosRequestConfig  = {
        method: 'GET',
        url: apiString.page,
        params: {
            projectId
        }
    }
    const res = await instance.run(cfg)
    return res
}

const add = async(name: string, projectId: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'POST',
        url: apiString.page,
        data: {
            name,
            projectId
        }
    }
    const res = await instance.run(cfg)
    return res
}

const del = async(id: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'DELETE',
        url: `${apiString.page}/${id}`,
    }
    const res = await instance.run(cfg)
    return res
}

export default { list, add, del }