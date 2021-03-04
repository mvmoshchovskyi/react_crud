import React from 'react';
import {Link} from "react-router-dom";
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavItem,
    Container
}
    from 'reactstrap';

export const Heading = () => {
    return (
        <Navbar color='dark'>
            <Container>
                <NavbarBrand href='/'>MVM</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to='/add' className='btn btn-primary ml-2'>Add User</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
};
