import { useState } from "react";

function Login() {
  const [loginData, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setData(prevState => {
      return {
        ...prevState, [e.target.name]: e.target.value
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} style={{border: "1px solid black", height: "50vh"}}>
        <div style={{marginTop: "10%"}}>
          <div>
            <h5>{JSON.stringify(loginData)}</h5>
          </div>
          <label>
            Username
          </label>
          <input type="text" onChange={handleChange} name="username"/>
        </div>
        <div>
          <label>
            Password
          </label>
          <input type="password" onChange={handleChange} name="password"/>
        </div>
        <div>
          <button>
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;