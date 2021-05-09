import instance from '../instance'
import apiString from '../apiString'
import { AxiosRequestConfig} from 'axios'


const signUp = async(email: string, password: string) => {
    const cfg: AxiosRequestConfig = {
        method: 'POST',
        url: apiString.signUp,
        data: {
          email,
          password
        }
    }
    const res = await instance.run(cfg)
    return res 
}

const login = async() => {
  const cfg: AxiosRequestConfig = {
    method: 'POST',
    url: apiString.login
  }
  const res = await instance.run(cfg)

  return res
}

const userInfo = () => {
  
}



export default { login, signUp }
