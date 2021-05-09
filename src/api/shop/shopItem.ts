import instance from '../instance'
import { AxiosRequestConfig} from 'axios';
import apiString from '../apiString'
import { IItemBase } from '../../IAPI/Ishop'


const list = async(): Promise<IItemBase[]>  => {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.shopItem
  }
  const res = await instance.run(cfg)
  const data = res.data as IItemBase[]
  return data
}

export default { list }