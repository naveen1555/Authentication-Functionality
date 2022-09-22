import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const onSuccessLogin = jwtToken => {
    const {history} = props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  const onSubmitLoginBtn = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      onSuccessLogin(data.jwt_token)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button type="submit" className="login-btn" onClick={onSubmitLoginBtn}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
