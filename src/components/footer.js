import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo1 from '../assests/vb-logo-1.png';
import twitter from '../assests/twitter.png';
import facebook from '../assests/facebook.png';
import instagram from '../assests/instagram.png';
import email from "../assests/email.png";
import phone from "../assests/phone.png";
import "./foot.css";
function HeaderAndFooterExample() {
  return (
    <Card >
      <Card.Body class='CardBody'>
      <Container>
      <Row>
        <Col lg={3} md={6} sm={12}> <Image src={logo1}   alt='image of vb'  />
        <Nav.Link href="#" className='column1' >123-xyz </Nav.Link>
      <Nav.Link eventKey="link-1" className='links1' >Dilshuknagar,</Nav.Link>
      <Nav.Link eventKey="link-2" className='links1'> Hyderabad,</Nav.Link>
      <Nav.Link eventKey="link-2" className='links1'>522251.</Nav.Link>
      <Nav.Link eventKey="link-2"  className='links1'>Andhra Pradesh</Nav.Link>
        </Col>
        <Col lg={3} md={6} sm={12} className='column2' >
        <h5 className='size3'>COMPANY</h5>
   
      <Nav.Link href="/home" class='links2' >Home</Nav.Link>
      <Nav.Link eventKey="link-1"  class='links2'>About</Nav.Link>
      <Nav.Link eventKey="link-2" class='links2'>Services</Nav.Link>
      <Nav.Link eventKey="link-2" class='links2'>Projects</Nav.Link>
        </Col>
        <Col lg={3} md={6} sm={12} className='column2' >
        <h5 className='size3' >CONTACT  US</h5>
   
   <Nav.Link href="/home"  class='links2'><img src={phone} alt='phone-icon' />+91 13456789 </Nav.Link>
   <Nav.Link eventKey="link-1"  class='links2'><img src={email} alt='email-icon' style={{"padding":"5px"}} />vbenterprises@gmail.com</Nav.Link>
   
        </Col>
         <Col lg={3} md={6} sm={12}  className='column2'>
         <h5 className='size3' >COMPANY</h5>
       <div class='topp'>  <img src={facebook} alt='facebook-link' class='topr'></img><img src={twitter} alt='twitter-icon' class='topr'></img><img  src={instagram} alt='instagram-icon'></img></div>
         </Col>
      </Row>
      </Container>
      </Card.Body>
      <Card.Footer class="text-center" >All information is subject to specific conditions. ©2023  VB Enterprises. All rights reserved.</Card.Footer>
    </Card>
  
  );
}

export default HeaderAndFooterExample;