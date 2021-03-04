import React, {useContext, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {GlobalState} from "../context/GlobalState";

export const EditUser = () => {
    const [editedUser, setEditedUser] = useState({
        id: '',
        name: ''
    })
    const {editUser} = useContext(GlobalState)
    const history = useHistory()
    const {id} = useParams()
    const userId = parseInt(id);

    const submitHandler = (e) => {
        e.preventDefault()
        const newUser ={
            id: userId,
            name:editedUser.name
        }

        editUser(newUser)
        setEditedUser('')
        history.push('/')
    }
    const changeName = (e) => {
        setEditedUser({...editedUser, [e.target.name]: e.target.value})

    }

    return (
        <Form onSubmit={submitHandler}>
            <FormGroup>
                <Label>Edit</Label>
                <Input value={editedUser.name} name= 'name' type='text' placeholder='edit user' onChange={changeName}/>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    );
};
