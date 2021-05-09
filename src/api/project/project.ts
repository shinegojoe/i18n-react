import instance from '../instance'
import { AxiosRequestConfig} from 'axios';
import apiString from '../apiString'



const list = async() => {
    const cfg: AxiosRequestConfig  = {
        method: 'GET',
        url: apiString.project,
    }
    const res = await instance.run(cfg)
    return res
}

export default { list }