import React from 'react'

import Logo from '../../assets/Logo.svg'

// ** Imported Styles
import {
  Button
} from './styles'

export interface Props {
  selected ?: boolean,
  isHome ?: boolean,
  hasNotifications ?: boolean,
  mentions ?: number
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => (
  <Button
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? 'active' : ''}
  >
    {isHome && <img src={Logo} alt="Reports+" />}
  </Button>
)

export default ServerButton
