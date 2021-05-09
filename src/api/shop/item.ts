import instance from '../instance'
import { AxiosRequestConfig} from 'axios';
import apiString from '../apiString'
import { IItem } from './IShop'
import { ILogoInfoBase, IItemBase } from '../../IAPI/Ishop'
import { IStyleImg } from '../../IAPI/IImgStyle'



const get = async() => {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.item
  }
  const res = await instance.run(cfg)
  return res
}

const list = async(): Promise<IItem[]> => {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.item,
    params: {}
  }
  const res = await instance.run(cfg)
  // const data = res.data.map((item: any, index: number)=> {
  //   const x: IItem = item
  //   return x
  // })
  const data = res.data as IItem[]
  return data
}

const post = async(item: IItem): Promise<any> => {
  try {
    // const item: IItem = {
    //   uid: 1,
    //   title: `test item ${Math.floor(Math.random()* 999)}`,
    //   intro: 'this is the test item',
    //   imgUrl: 'http://www.xxx.123',
    //   price: 100
    // }
    const cfg: AxiosRequestConfig = {
      method: 'POST',
      url: apiString.item,
      data: item
    }
    const res = await instance.run(cfg)
    return res
  } catch(e) {
    
  }
  
}

const update = async(item: IItemBase, logoList: ILogoInfoBase[]) => {
  const cfg: AxiosRequestConfig = {
    method: 'PATCH',
    url: apiString.item,
    data: {
      item,
      logoList
    }
  }
  const res = await instance.run(cfg)
  return res
}

const del = async(id: Number) => {
  const cfg: AxiosRequestConfig = {
    method: 'DELETE',
    url: `${apiString.item}/${id}`
  }
  const res = await instance.run(cfg)
  return res
}

const addToShop = async(id: number, isShopOn: number) => {
  const cfg: AxiosRequestConfig = {
    method: 'PATCH',
    url: `${apiString.item}/isShopOn`,
    data: {
      id: id,
      isShopOn: isShopOn
    }
  }
  const res = await instance.run(cfg)
  return res
}

const getStyleImg = async(imgData: string, type: string) => {
  const cfg: AxiosRequestConfig = {
    method: 'POST',
    url: apiString.styleImg,
    data: {
      imgData,
      type
    }
  }
  const res = await instance.run(cfg)
  return res
}

const getStyleList = async() => {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.styleList
  }
  const res: IStyleImg[] = await instance.run(cfg)
  return res
}

export default { get, list, post, update, del, addToShop, getStyleImg, getStyleList }