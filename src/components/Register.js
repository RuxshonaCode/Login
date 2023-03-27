import {useContext} from 'react'
import { Context } from '../context'
const Register = () => {
       const {email, setEmail, username, setUsername, password, setPassword, Register} = useContext(Context)
  return (
    <div>
       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="name"/>
       <br />
       <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
       <br />
       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
       <br />
       <button onClick={Register}>Sign-up</button>
    </div>
  )
}

export default Register