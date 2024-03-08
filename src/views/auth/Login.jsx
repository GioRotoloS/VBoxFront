import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Button, Form, Input, FormGroup  } from 'reactstrap';
import vbox from "../../img/vbox.png";
import { useContext } from "react";
import { AuthContext } from "../../utils/authContext";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
});

const [err,setError] = useState(null)

const navigate = useNavigate()

const {login} = useContext(AuthContext);

const handleChange = (e) =>{
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}));
};

const handleSubmit = async (e) =>{
    e.preventDefault()

    try{
        
        await login(inputs)
        navigate("/home");

    }catch(err){
        setError(err.response.data)
    }
}



    return (
      <div className='container justify-content-center text-center shadow p-3 mb-5 bg-body border rounded' style={{
        width: 300,
        marginTop: 100
      }}>
        <div>
        <img src={vbox} alt="" style={{
          marginTop: 20,
          width: '90%',
          marginBottom: 20,
        }}/>
        </div>
        <h5>
          Reportes
        </h5>
        <div style={{
          padding: 20
        }}>
          <Form>
            
              <FormGroup>
                <Input id="Email" name="email" placeholder="Email" type="email" onChange={handleChange}/>
              </FormGroup>
            

            <FormGroup>
            <Input id="Pass" name="pass" placeholder="Contraseña" type="password" onChange={handleChange}/>
            </FormGroup>
          </Form>
          <div className='d-grid gap-2 col-9 mx-auto'>
            <Button style={{
              background: "#0c5aa9"
            }} onClick={handleSubmit}>
              Ingresar
            </Button>
            {err && <p>{err}</p>}
          </div>
        </div>
      </div>
    )
}

export default Login;