function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} style={{border: "1px solid black", height: "50vh"}}>
        <div style={{marginTop: "10%"}}>
          <label htmlFor="">
            Username
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">
            Password
          </label>
          <input type="text" />
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