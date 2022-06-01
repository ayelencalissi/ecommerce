import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <NavLink to={'/'} className={'optionActive'} >
                            <FontAwesomeIcon icon={faCloudMoon}/>
                            Effy Clothes
                        </NavLink>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to={'category/pijamas'} className={({isActive}) => isActive ? 'optionActive' : 'option'} >Pijamas</NavLink>
                        <NavLink to={'category/tops'} className={({isActive}) => isActive ? 'optionActive' : 'option'} >Tops</NavLink>
                        <NavLink to={'category/jeans'} className={({isActive}) => isActive ? 'optionActive' : 'option'} >Jeans</NavLink>
                        <NavLink to={'category/accesorios'} className={({isActive}) => isActive ? 'optionActive' : 'option'} >Accesorios</NavLink>
                    </Nav>
                    <Nav className="justify-content-end">
                        <CartWidget/>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar