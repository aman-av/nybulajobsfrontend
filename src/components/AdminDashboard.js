import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
function AdminDashboard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    

    
  
    const handleclick = async (e) => {

        e.preventDefault();
       
        try {
        
            if (!name || !email || !password )
                window.alert("Fill all fields");
            else {
              
              
                const newuser = {
                    'name': name,
                    'email': email,
                    'password': password,
                    'type': 'terraformer'
                }
                // const response =
                    await axios.post('https://elegant-tank-top-fish.cyclic.app/signup', newuser);
            }
        }
        catch (err) {
            setError(err.message);
            console.log(error);
        }
    }
       
    

    return (<div>
            <h1 style={{margin:'5% 5% 5% 5%'}}>Create New Account for Terraformer</h1>
        <div style={{ margin: '20% 20% 20% 20%' }}>
        <div className="d-grid gap-2">
            <Form onSubmit={handleclick}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter Name " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter Email " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="text" placeholder="Enter Password " />
                </Form.Group>

                <Button style={{ margin: "5% 0 5% 0" }} variant="primary" className="block" type="submit" >Add</Button>
            </Form>
        </div>
        </div>
    </div>);
}

export default AdminDashboard;