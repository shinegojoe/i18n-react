import instance from '../instance'
import { AxiosRequestConfig} from 'axios';
import apiString from '../apiString'
import { ILogoInfoBase, IItemBase } from '../../IAPI/Ishop'
import axios from 'axios'

const parseImgData = async(url: string) => {
  const path = `${apiString.img}/${url}`

  const resp = await axios.get(path, {
    responseType: 'arraybuffer'
  })
  const buf = Buffer.from(resp.data, 'binary').toString('base64')
  const img64 = `data:image/png;base64,${buf}`
  return img64

}

const list = async(item: IItemBase)=> {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.logoInfo,
    params: {itemId: item.id}
  }
  const res = await instance.run(cfg)
  const logoList = res.data as ILogoInfoBase[]
  for(const item of logoList) {
    const img64 = await parseImgData(item.imgUrl)
    item.imgData = img64
  }
  return logoList
}

export default { list }