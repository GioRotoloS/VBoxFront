import React from 'react';
import test from "../img/test.png";

const Login = () => {
    return (
      <div className="auth">

        <div className="container">
          <div>
            <img src={test} alt=""/>
          </div>
        </div>
        
      <h1>Reportes</h1>
      <form>
          <input required type={"text"} placeholder="username" name="username"/>
          <input required type={"password"} placeholder="password" name="password"/>
          <button>Login</button>
          <p>
            Aqui va el error
          </p>
      </form>
  </div>
    )
}

export default Login;