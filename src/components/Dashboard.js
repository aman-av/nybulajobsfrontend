import React,{useState,useEffect} from "react";
import { Row, Card, Col, Button } from 'react-bootstrap';
import axios from "axios";
function Dashboard() {

  const [listitem, setListitem] = useState([]);
  const [jobdata, setJobdata] = useState({});
  const [alreadyapplied, setAlreadyapplied] = useState([]);
  
    const populatearray = async() => {
        
        const response = await axios.get('https://nybulajobsbackend.cyclic.app/jobs/getorder');
      const response2 = await axios.get('https://nybulajobsbackend.cyclic.app/jobs/alljobs');
      let user = JSON.parse(localStorage.getItem('user'));
       const resp = await axios.post('http://localhost:8000/jobs/getjobsapplied',{userid:user._id});
    setAlreadyapplied(resp.data);
        console.log(response2)
        console.log(response)
        setJobdata(response2.data);
        setListitem(response.data);
    }
    useEffect(() => {
        populatearray();
    }, []);
  
  const handleClick = async(item) => {
    let user = JSON.parse(localStorage.getItem('user'));
    await axios.post('http://localhost:8000/jobs/jobsapplied', { jobid: item,userid:user._id });
    const resp = await axios.post('http://localhost:8000/jobs/getjobsapplied',{userid:user._id});
    setAlreadyapplied(resp.data);
  }
  
  return <div>
    <h1 style={{textAlign:'center',margin:'2% 5%'}}>Nybula Jobs Portal</h1>
    {listitem ? listitem.map(item => 
    <Card style={{backgroundColor:jobdata[item].color}} body className="m-3">
                <Row>
                
                    <h4>Title  :  {jobdata[item].title}</h4>
                    <Col xs={12} lg={ 6}>
                <p> Contact email : { jobdata[item].email}</p>
                <p> Contact Phone Number : { jobdata[item].phonenumber}</p>
                    </Col>
                    <Col xs={12} lg={ 6}>
                <p> Job Location : {jobdata[item].location}</p>
                <p> Deadline : { (new Date(jobdata[item].deadline)).toLocaleDateString('en-IN')}</p>
                    </Col>
          <p>Description : {jobdata[item].description}</p>
        </Row>
        {
          alreadyapplied.includes(item)?<Button disabled={true}>Already applied</Button>:
          <Button onClick={e=>handleClick(item)}>Interested</Button>
        }
            </Card>) : <></>}
  </div>;
}

export default Dashboard;
