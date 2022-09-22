import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickLogOutBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" className="logout-btn" onClick={onClickLogOutBtn}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
