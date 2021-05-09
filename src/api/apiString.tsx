import env from "react-dotenv";


const base: string = env.URL as string

interface IApiString {
  user: string
  item: string
  logoInfo: string
  img: string
  shopItem: string
  googleLogin: string
  login: string
  signUp: string
  styleImg: string
  styleList: string
  project: string
  lang: string
  page: string
  row: string
}

const apiString: IApiString = {
  user: `${base}/user`,
  item: `${base}/item`,
  logoInfo: `${base}/logoInfo`,
  img: `${base}/img`,
  shopItem: `${base}/shopItem`,
  googleLogin: `${base}/googleLogin`,
  login: `${base}/login`,
  signUp: `${base}/signUp`,
  styleImg: `${base}/styleImg`,
  styleList: `${base}/styleList`,
  project: `${base}/project`,
  lang: `${base}/language`,
  page: `${base}/page`,
  row: `${base}/row`


}

export default apiString