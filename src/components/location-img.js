import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import location from "../assests/location.png";
import location1 from "../assests/location-main.png";
import "./location.css"
function ImgOverlayExample() {
  return (
    <Card className="location-card">
      <Card.Img src={location1} className="location-img" alt="Card image"  />
      <Card.ImgOverlay>
        <Container>
        <Card.Title style={{"color":"#fff","font-size": "32px","font-weight": "600"}}>Our Service Locations</Card.Title>
        <Card.Text className='size'>
        <Row className='Row1'>
        <Col lg={2} xs={4}><img src={location} alt='ic' ></img>Hyderabad</Col>
        <Col lg={2} xs={4}><img src={location} alt='ic' ></img>Warangal</Col>
        <Col lg={2} xs={4}><img src={location}alt='ic' ></img>Ananthapur</Col>
        <Col lg={3} xs={6}><img src={location}  alt='ic'></img>Vijayanagaram</Col>
        <Col lg={2} xs={6}><img src={location} alt='ic'  ></img>Kurnool</Col>
      </Row>
      <Row className='Row1'>
        <Col lg={2} xs={4}><img src={location}  alt='ic' ></img>Nizamabad</Col>
        <Col lg={2} xs={4}><img src={location} alt='ic'  ></img>Vijayawada</Col>
        <Col lg={2} xs={3}><img src={location}  alt='ic' ></img>Tirupati</Col>
        <Col lg={3} xs={6}><img src={location}  alt='ic' ></img>Khammam</Col>
        <Col lg={2} xs={6}><img src={location} alt='ic'  ></img>Nellore</Col>
      </Row>
      <Row className='Row1'>
        <Col lg={2} xs={4}><img src={location} alt='ic'  ></img>Rangareddy</Col>
        <Col lg={2}  xs={3}><img src={location} alt='ic'  ></img>Guntur</Col>
        <Col lg={2}  xs={3}><img src={location}  alt='ic' ></img>Vizag</Col>
        <Col lg={3}  xs={6} ><img src={location} alt='ic' ></img>Rajahmundry</Col>
        <Col lg={2}  xs={6}><img src={location} alt='ic'  ></img>Medak</Col>
      </Row>
      </Card.Text>
    <center>  <Card.Text className='size1' style={{"color":"white"}}>Contact: +91 98666 78788</Card.Text>
     </center> </Container>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;