import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import vbox from "../../img/vbox.png";

const Login = () => {


  const [err,setError] = useState(null);
const navigate = useNavigate();

const handleSubmit = async (e) =>{
  e.preventDefault()

  try{
      
      
      navigate("/");

  }catch(err){
      setError(err.response.data)
  }
}



    return (
      <div className="auth">

        <div className="container">
          <div>
           <img src={vbox} alt="" />
          </div>
        </div>
        
      <h1>Reportes</h1>
      <form>
          <input required type={"text"} placeholder="username" name="username"/>
          <input required type={"password"} placeholder="password" name="password"/>
          <Button onClick={handleSubmit}>Ingresar</Button>
          {err && <p>{err}</p>}
      </form>
  </div>
    )
}

export default Login;