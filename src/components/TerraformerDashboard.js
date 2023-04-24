import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Draganddrop from './Draganddrop';
function TerraformerDashboard() {
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleForm = async() => {
    handleClose();
    if (!title || !email || !description || !location || !deadline || !phonenumber)
      alert('fill all fields')
    else {

       const newJob = {
             title: title,
             email: email,
             description: description,
             location: location,
             deadline: deadline,
             phonenumber:phonenumber
            
      }
      console.log(newJob)
      const response = await axios.post('https://nybulajobsbackend.cyclic.app/jobs/createnew', newJob);
      setKey(key + 1);
    }
  }
  const [key, setKey] = useState(0);
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [deadline, setDeadline] = useState('' );
  const [phonenumber, setPhonenumber] = useState('');
  

  return (
    <div style={{backgroundImage:`url${(require('../assets/nebula.jpg'))}`}}>
      <div style={{margin:'2% 5%'}}>

      <Button variant="primary" onClick={handleShow}>
          Add new job
      </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={e=>setTitle(e.target.value)} type="text" placeholder="Enter title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactemail">
                <Form.Label>Contact email</Form.Label>
                <Form.Control onChange={e=>setEmail(e.target.value)} type="email" placeholder="Contact email" />
            </Form.Group>

             <Form.Group className="mb-3" controlId="contactemail">
                <Form.Label>Description</Form.Label>
                 <Form.Control onChange={e=>setDescription(e.target.value)} as="textarea" rows={3} />
            </Form.Group>

             <Form.Group className="mb-3" controlId="location">
                <Form.Label>Work location</Form.Label>
                <Form.Control onChange={e=>setLocation(e.target.value)} type="text" placeholder="work location" />
            </Form.Group>

             <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control onChange={e=>setDeadline(e.target.value)} type="date" placeholder="Enter date" />
            </Form.Group>
            
             <Form.Group className="mb-3" controlId="phonenumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={e=>setPhonenumber(e.target.value)} type="number" placeholder="Enter number" />
              </Form.Group>

            
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Draganddrop key={key} />
    </div>
  );

}

export default TerraformerDashboard;
