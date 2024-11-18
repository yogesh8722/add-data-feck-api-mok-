import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux/slice/createslice';
import { useNavigate } from 'react-router';

function Forms() {
    const [user, setUser] = useState({});

    const dispatch=useDispatch();
    const navigate=useNavigate()

    function getUserData(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(user);
        
    }

    function handleSubmit(e){
        e.preventDefault();

        if(!user) return
        console.log(user);
        dispatch(createUser(user));
        navigate("/read")
    }



    return (
        <div className='Form-container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" autoComplete='off' name='name' onChange={getUserData} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" autoComplete='off' name='email' onChange={getUserData}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>age</Form.Label>
                    <Form.Control type="number" autoComplete='off' name='age' onChange={getUserData}/>
                </Form.Group>
                <Form.Group>
                    <label>Gender</label>
                    <Form.Select name='gender' onChange={getUserData} >

                        <option>Gender select</option>
                        <option  value="Male">Male</option>
                        <option  value="Female">Female</option>
                        <option  value="Other">Other</option>
                    </Form.Select>
                </Form.Group>
                <Button className='mt-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default Forms;
