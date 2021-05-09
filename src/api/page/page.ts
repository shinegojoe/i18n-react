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

export default { list }