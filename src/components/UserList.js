import React, {useContext} from 'react';
import {GlobalState} from '../context/GlobalState'
import {Link} from "react-router-dom";
import {
    ListGroup,
    ListGroupItem,
    Button
}
    from 'reactstrap';

export const UserList = () => {
    const {users,removeUser } = useContext(GlobalState)
    return (
        <ListGroup className="mt-3 ">
            {users.map(user => {
                return (
                    <ListGroupItem className='d-flex' key={user.id}>
                        <strong> {user.name}</strong>
                        <div className="ml-auto ">
                            <Link to={`/edit/${user.id}`} className='btn btn-warning'>Edit</Link>
                            <Button className='btn btn-danger ml-2' onClick={()=>removeUser(user.id)} >Delete</Button>
                        </div>
                    </ListGroupItem>
                )
            })
            }
        </ListGroup>
    );
};

