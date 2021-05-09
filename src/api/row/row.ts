import instance from '../instance'
import { AxiosRequestConfig} from 'axios';
import apiString from '../apiString'



const list = async(pageId: number) => {
    const cfg: AxiosRequestConfig  = {
        method: 'GET',
        url: apiString.row,
        params: {
            pageId
        }
    }
    const res = await instance.run(cfg)
    return res
}

export default { list }