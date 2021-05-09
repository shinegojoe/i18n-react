import { useContext } from 'react'
import { IconContext } from '../../context/iconContext'
import { IIcon } from '../IIcon'

const Google = () => {
  const val = useContext(IconContext)
  const color = val.color !== 'default' ? val.color : '#DC493D'

  return (
    <div>
      <svg width={val.w} height={val.h} color = {color} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256,8C119.1,8,8,119.1,8,256S119.1,504,256,504,504,392.9,504,256,392.9,8,256,8ZM185.3,380a124,124,0,0,1,0-248c31.3,0,60.1,11,83,32.3l-33.6,32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9,0-77.2,35.5-77.2,78.1S142.3,334,185.3,334c32.6,0,64.9-19.1,70.1-53.3H185.3V238.1H302.2a109.2,109.2,0,0,1,1.9,20.7c0,70.8-47.5,121.2-118.8,121.2ZM415.5,273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5Z"></path></svg>
    </div>
  )
}

export default Google