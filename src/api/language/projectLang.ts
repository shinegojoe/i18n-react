import instance from '../instance'
import { AxiosRequestConfig} from 'axios'
import apiString from '../apiString'


const list = async(projectId: number) => {
    const cfg: AxiosRequestConfig  = {
        method: 'GET',
        url: apiString.projectLang,
        params: {
            projectId
        }
    }
    const res = await instance.run(cfg)
    return res
}

const add = async(projectId: number, langId: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'POST',
        url: apiString.projectLang,
        data: {
            projectId,
            langId
        }
    }
    const res = await instance.run(cfg)
    return res
}

const del = async(id: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'DELETE',
        url: `${apiString.projectLang}/${id}`,
    }
    const res = await instance.run(cfg)
    return res
}

export default { list, add, del }