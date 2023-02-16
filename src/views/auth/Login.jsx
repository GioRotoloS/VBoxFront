import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Button, Form, Row, Col, Input, FormGroup  } from 'reactstrap';
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
                <Input id="User" name="user" placeholder="Usuario" type="text"/>
              </FormGroup>
            

            <FormGroup>
            <Input id="Password" name="password" placeholder="Contraseña" type="password"/>
            </FormGroup>
          </Form>
          <div className='d-grid gap-2 col-9 mx-auto'>
            <Button href='/' style={{
              background: "#0c5aa9"
            }}>
              Ingresar
            </Button>
          </div>
        </div>
      </div>
    )
}

export default Login;