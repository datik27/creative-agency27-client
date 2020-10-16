import React from 'react';
import { Form } from 'react-bootstrap';

const AdminServiceListDetails = ({service}) => {
    const statusHandler=(e)=>{
        fetch('https://creative-agency-fullstack.herokuapp.com/update-status',{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                status:e.target.value,
                id:service._id
            })
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }
    
    return (
        
        <tr style={{ fontWeight:'400',}}>
            <td>{service.name}</td>
            <td>{service.email}</td>
            <td>{service.serviceTitle}</td>
            <td>{service.projectDetails}</td>
            <td>
            {
                service.status.toLowerCase()=='pending' &&
                 <Form.Control as="select" className='text-danger' onChange={statusHandler}>
                    <option  selected style={{color:'#FF4545'}}>Pending</option>
                    <option style={{color:'#009444'}}>Done</option>
                </Form.Control>
            }
            {
                service.status.toLowerCase()=='done'&&
                <Form.Control className='text-success' as="select" onChange={statusHandler}>
                    <option style={{color:'#FF4545'}}>Pending</option>
                    <option selected style={{color:'#009444'}}>Done</option>
                </Form.Control>
            }
            </td>
        </tr>
    );
};

export default AdminServiceListDetails;