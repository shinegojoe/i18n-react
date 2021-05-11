import instance from '../instance'
import { AxiosRequestConfig} from 'axios';
import apiString from '../apiString'


const list = async(rowId: number) => {
    const cfg: AxiosRequestConfig  = {
        method: 'GET',
        url: apiString.text,
        params: {
            rowId
        }
    }
    const res = await instance.run(cfg)
    return res
}

const update = async(data: any) => {
  const cfg: AxiosRequestConfig = {
    method: 'PATCH',
    url: apiString.text,
    data: data
  }
  const res = await instance.run(cfg)
  return res
}

export default { list, update }