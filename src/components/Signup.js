import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";

function Signup() {
  
  const { signIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
    
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

      try {
        
          if (!name|| !email  || !password)
              window.alert("Fill all fields");
          else {
              
              
              const newuser = {
                  'name': name,
            'email': email,
            'password': password,
            'type':'user'
            }
            const response = await axios.post('https://nybulajobsbackend.cyclic.app/signup', newuser);
          await signIn(response.data.user);
            navigate('/dashboard');
        }
    }
    catch(err) {
      setError(err.message);
      console.log(error);
    }
  }

  return <div>
    <Row style={{margin:'10% 20% 10% 20%'}}>
      <h1 style={{textAlign:'center'}}>Sign Up for Free</h1>
          <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Password</Form.Label>
        <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
          <p>Already have an account? <Link to='/'>Signin</Link> </p>
    </Form>
    </Row>
  </div>;
}

export default Signup;