import {useContext} from 'react'
import { Context } from '../context'
const Login = () => {
       const {Login,setPasswordLogin,passwordLogin,setEmailLogin,emailLogin} = useContext(Context)
  return (
    <div>
         <div>
       <br />
       <input type="text" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} placeholder="email"/>
       <br />
       <input type="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} placeholder="password"/>
       <br />
       <button onClick={Login}>Sign-up</button>
    </div>
    </div>
  )
}

export default Login