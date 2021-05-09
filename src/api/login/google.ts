import instance from '../instance'
import apiString from '../apiString'
import { AxiosRequestConfig} from 'axios'
import { ILoginUrl, IGoogleCode } from '../../IAPI/ILogin'


const getLoginUrl = async() => {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.googleLogin
  }
  const res = await instance.run(cfg)

  return res as ILoginUrl
}

const getToken = async(code: string) => {
  const data: IGoogleCode = {
    codeString: code
  }
  const cfg: AxiosRequestConfig = {
    method: 'POST',
    url: apiString.googleLogin,
    data
  }
  const res = await instance.run(cfg)
  return res

}

export default { getLoginUrl, getToken }
