import { createContext, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Context = createContext()

const reg = "http://localhost:8080/api/sign-up/"
const login = "http://localhost:8080/api/sign-in/"
const ContextProvider = ({children}) => {
       const navigate = useNavigate()
const [email, setEmail] = useState("")
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
       const Register = () => {
              axios.post(reg, {
                     email: email,
                     username: username,
                     password: password
              })
              .then(res => {
                     if(res.status === 201){
                            navigate("/login")
                     }
              })
              .catch(err => {
                     console.log(err);
              })
       }


       //LOGIN
       const [emailLogin, setEmailLogin] = useState("")
       const [passwordLogin, setPasswordLogin] = useState("")
       const Login = () => {
              axios.post(login, {
                     email: email,
                     password: password
              })
              .then(res => {
                     if(res.status === 200){
                            navigate("/home")
                     }
              })
              .catch(err => {
                     console.log(err);
              })
       }


       return(
              <Context.Provider value={{Login,setPasswordLogin,passwordLogin,setEmailLogin,emailLogin,email, setEmail, username, setUsername, password, setPassword, Register}}>
                     {children}
              </Context.Provider>
       )
}

export {ContextProvider, Context}