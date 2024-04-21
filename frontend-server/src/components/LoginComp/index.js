import { useEffect, useState } from "react";

function Login() {
  const [loginData, setData] = useState({
    username: "",
    password: "",
    checked: false
  });

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  const handleChange = (e) => {
    // console.log(e.target.type);
    setData(prevState => {
      return {
        ...prevState, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} style={{border: "1px solid black", height: "50vh"}}>
        <div>
          <h5>{JSON.stringify(loginData)}</h5>
        </div>
        <div style={{marginTop: "10%"}}>
          <label>
            Username
          </label>
          <input type="text" onChange={handleChange} name="username"/>
        </div>
        {loginData.checked && 
          <div>
            <label>
              Password
            </label>
            <input type="password" onChange={handleChange} name="password"/>
          </div>
        }
        <div>
          Click Here <input type="checkbox" onChange={handleChange} name="checked" />
        </div>
        <div>
          <button style={{marginRight: "4px", marginTop: "4px"}}>
            Sign In
          </button>
          <button>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;