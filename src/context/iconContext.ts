import React from 'react'
import { IIcon } from '../icons/IIcon'

const init: IIcon = {
  name: '',
  w: '',
  h: '',
  color: ''
}
const IconContext = React.createContext<IIcon>(init)

export { IconContext }
