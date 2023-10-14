import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import vblogos from "../assests/VB-Wide.png";
function CollapsibleExample(){
 

  return (
    <>
    <Navbar expand="lg" className="bg-body-light">
    <Container>
      <Navbar.Brand href="#home"><img src={vblogos} width={250}></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/"className='listlink' >HOME</Nav.Link>
          <Nav.Link href="/about" className='listlink'>ABOUT</Nav.Link>
          <Nav.Link href="/services"className='listlink'>SERVICES</Nav.Link>
          <Nav.Link href="/projects"className='listlink'>PROJECTS</Nav.Link>
          <Nav.Link href="#"className='listlink' style={{"paddingRight":"70px"}} >CONTACT</Nav.Link>
          <Button variant="dark" style={{"paddingRight":"25px","fontWeight":"600"}}>CALL NOW</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</>
  );
}

export default CollapsibleExample;