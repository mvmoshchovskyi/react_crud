import React, {useContext, useState} from 'react';
import {v4 as  uuid} from 'uuid'
import {Link, useHistory} from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {GlobalState} from "../context/GlobalState";

export const AddUser = () => {
    const [name, setName] = useState('')
    const {addUser} = useContext(GlobalState)
    const history = useHistory()

    const submitHandler =(e)=>{
        e.preventDefault()
        const newUser ={
            id: uuid(),
            name,
        }
        addUser(newUser)
        setName('')
        history.push('/')
    }
    const changeName =(e)=>{
        setName(e.target.value)
        console.log(name)
    }
    return (
        <Form onSubmit={submitHandler}>
            <FormGroup>
                <Label >Add</Label>
                <Input value={name} type='text' placeholder='add user' onChange ={changeName} />
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    );
};
