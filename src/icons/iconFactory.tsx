import FB from './iconComponent/fb'
import Google from './iconComponent/google'
import { IconContext } from '../context/iconContext'
import { IIcon } from '../icons/IIcon'


const getIcon = (name: any) => {
  switch(name) {
    case "fb":
      return <FB></FB>
    case "google":
      return <Google></Google>
    default:
      return <div></div>
  }
}

const IconWrapper = (props: IIcon) => {
  const icon = getIcon(props.name)
  return  <IconContext.Provider value={props}>{icon}</IconContext.Provider>
  
}

export default IconWrapper

