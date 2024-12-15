import React ,{useState}from 'react'
import {useNavigate} from "react-router-dom"

const Signup = () => {
    const [credentials, setCredentials] = useState({name:"",email:"", password:"",cpassword:""})
    const host="http://localhost:5000"
    let navigate =useNavigate()
    const {name, email, password,cpassword} = credentials
    const submit= async (e)=> {
        e.preventDefault();
        const response= await fetch(`${host}/api/auth/createuser`, {
            method:"POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,password})
          })
          const json= await response.json()
          console.log(json.authtoken)
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
    <label htmlFor="name" className="form-label">
     Name
    </label>
    <input
      type="name"
      className="form-control"
      id="name"
      name="name"
      value={credentials.name}
      onChange={onChange}
      aria-describedby="emailHelp"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      name="email"
      value={credentials.email}
      onChange={onChange}
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="password"
      value={credentials.password}
      onChange={onChange}
      name="password"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">
      Confirm Password
    </label>
    <input
      type="cpassword"
      className="form-control"
      id="cpassword"
      onChange={onChange}
      name="cpassword"
      value={credentials.cpassword}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
    </div>
  )
}

export default Signup
