import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image11 from "../assests/image11.png";
import image12 from "../assests/image12.png";
import image13 from "../assests/image13.png";
import image14 from "../assests/image14.png";
import image15 from "../assests/image15.png";
import image16 from "../assests/image16.png";
import image17 from "../assests/image17.png";
import image18 from '../assests/image18.png';
import image19 from "../assests/image19.png";
import image20 from "../assests/image20.png";
import image21 from "../assests/image21.png";
import image22 from "../assests/image22.png";

function AutoLayoutExample() {
  return (
    <Container className='cont'>
         <Row className='text-en'>
        <Col xs={12} md={4} sm={12} className='text-end' > <img src={image11}alt="project-img" ></img></Col>
        <Col xs={12} md={4} sm={12} className='text-end'> <img src={image12}alt="project-img" ></img></Col>
        <Col xs={12} md={4} sm={12} className='text-end'> <img src={image13}alt="project-img" ></img></Col>
      </Row>
      <Row className='text-en'>
        <Col xs={12} md={4} className='text-end'> <img src={image14}alt="project-img" ></img></Col>
        <Col xs={12} md={4} className='text-end'> <img src={image15}alt="project-img" ></img></Col>
        <Col xs={12} md={4} className='text-end'> <img src={image16}alt="project-img" ></img></Col>
      </Row>
      <Row className='text-en'>
        <Col xs={12} md={4} className='text-end'> <img src={image17}alt="project-img" ></img></Col>
        <Col xs={12} md={4} className='text-end'>  <img src={image18}alt="project-img" ></img></Col>
        <Col xs={12} md={4} className='text-end'> <img src={image19}alt="project-img" ></img></Col>
      </Row>
      <Row className='text-en' >
        <Col xs={12} md={4} className='text-end'> <img src={image20}alt="project-img" ></img></Col>
        <Col xs={12} md={4} className='text-end'> <img src={image21}alt="project-img" ></img></Col>
        <Col xs={12} md={4} className='text-end'> <img src={image22}alt="project-img" ></img></Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;