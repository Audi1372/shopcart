import {Container,Navbar,NavDropdown,Nav,Badge,Button} from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa";
const Navigation = ({cartCount=[]}) => {
    return (
        // <Navbar bg="dark" variant="dark" >
        <Navbar id="count"
            bg="light" expand="lg" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand href="#home" >Start Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#link" >About</Nav.Link>
                        <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" >All Products</NavDropdown.Item>
                            <hr></hr>
                            <NavDropdown.Item href="#action/3.2">
                                Popular Item
                             </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">New Item</NavDropdown.Item>
                            
             
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                {/* <Dropdown alignRight>
            <Dropdown.Toggle variant="success"> */}
                
                <Button variant="outline-dark">
                    <FaShoppingCart color="black" fontSize="25px"/> Cart:
                    <Badge pill bg="black">{cartCount.length}</Badge>
                </Button>

            </Container>
        </Navbar>
       
        

    )
}
export default Navigation