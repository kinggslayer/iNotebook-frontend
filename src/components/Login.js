import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [credentials, setCredentials] = useState({email:"", password:""})
    const host="https://inotebook-backend-b17k.onrender.com"
    let navigate =useNavigate()
    const submit= async (e)=> {
        e.preventDefault();
        const response= await fetch(`${host}/api/auth/login`, {
            method:"POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
          })
          const json= await response.json()
          console.log(json.authtoken)
        //   console.log(json.success)
        if(json.success){
            localStorage.setItem("token",json.authtoken)
            navigate("/")
        }
        else{
            alert("Invalid Credentials")
        }
    }
    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]: e.target.value});
      }
  return (
    <div>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      value={credentials.email}
      onChange={onChange}
      name="email"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1"  className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      onChange={onChange}
      value={credentials.password}
      name="password"
      id="password"
    />
  </div>
  <button type="submit"  className="btn btn-primary">
    Submit
  </button>
</form>

    </div>
  )
}

export default Login
