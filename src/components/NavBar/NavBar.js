import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#">
                        <FontAwesomeIcon icon={faCloudMoon}/>
                        Effy Clothes
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Pantalones</Nav.Link>
                        <Nav.Link href="#">Tops/Blusas</Nav.Link>
                        <Nav.Link href="#">Zapatos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar