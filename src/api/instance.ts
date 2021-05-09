import axios, { AxiosInstance, AxiosRequestConfig} from 'axios';

class Axios{
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      // baseURL: 'http://192.168.2.222',
      // headers: { 'Content-Type': 'application/json' },
      timeout: 20000
    })
    this.useRequsetInterceptor()
  }
  useRequsetInterceptor(): void {
    this.instance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      }
    )
  }
  useResponseInterceptor() {

  }
  async run(config: AxiosRequestConfig) {
    const res = await this.instance(config)
    // console.log('xx', res)
    return res.data
  }

}

const axiosHelper = new Axios()
export default axiosHelper

// const instance = axios.create({
//   // baseURL: 'http://192.168.2.222',
//   // headers: { 'Content-Type': 'application/json' },
//   timeout: 20000
// })

// instance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

// instance.interceptors.response.use(
//   function (response) {
//     return response
//   },

//   function (error) {
//     if(error.response) {
//       switch(error.response.status) {
//         case 401: 
//           console.log('401')
//           break
//         case 404:
//           console.log('go to 404 page')
//           break
//         case 500:
//           console.log('500')
//           break
//         default:
//           console.log('error')
//       }
//     }
//     if(!window.navigator.onLine) {
//       alert("網路出了點問題，請重新連線後重整網頁");
//       return
//     }
//     return Promise.reject(error)
//   }

// )



// export default instance