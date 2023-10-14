import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./cardscss.css";
import Button1 from "./button.js"
function BasicExample() {
  return (
    <>
    <Container >
      <h2 className='h2' > Our Services</h2>
        <Row >
            <Col className='Col'>
    <Card className='Cards'>
      <Card.Img variant="top" src={process.env.PUBLIC_URL+"cards.png"} alt='cards images'/>
      <Card.Body>
        <Card.Title className='title'  >Bird Spikes:</Card.Title>
        <Card.Text className='text'  >
        We use high quality nylon nets for strong and long lasting safety nets. We use high quality nylon nets for strong and long lasting safety nets.
        </Card.Text>
        <Row >
            <Col><a href='#'><h6 style={{"font-weight":"600","fontSize":"16px","color":"#0094FF"}}>View more</h6></a></Col>
       <Col> <Button style={{"background-color":"#049E79","width":"176px","border-radius":"10px"}}>CONTACT</Button></Col>
       </Row>

      </Card.Body>
    </Card>
    </Col>
    <Col className='Col' >
    <Card className='Cards'>
      <Card.Img variant="top" src={process.env.PUBLIC_URL+"cards.png"}  alt='cards images'/>
      <Card.Body>
        <Card.Title  className='title' >Pigeon Safety Nets</Card.Title>
        <Card.Text className='text' >
        We use high quality nylon nets for strong and long lasting safety nets. We use high quality nylon nets for strong and long lasting safety nets.
        </Card.Text>
        <Row >
            <Col><a href='#'><h6 style={{"font-weight":"600","fontSize":"16px","color":"#0094FF"}}>View more</h6></a></Col>
       <Col> <Button style={{"background-color":"#049E79","width":"176px","border-radius":"10px"}}>CONTACT</Button></Col>
       </Row>

      </Card.Body>
    </Card>
    </Col>
    <Col className='Col'>
    <Card className='Cards'>
      <Card.Img variant="top" src={process.env.PUBLIC_URL+"cards.png"} alt='cards images'/>
      <Card.Body>
        <Card.Title  className='title' >Children's Safety Nets</Card.Title>
        <Card.Text className='text' >
        We use high quality nylon nets for strong and long lasting safety nets. We use high quality nylon nets for strong and long lasting safety nets.
        </Card.Text>
        <Row >
            <Col><a href='#'><h6 style={{"font-weight":"600","fontSize":"16px","color":"#0094FF"}}>View more</h6></a></Col>
       <Col> <Button style={{"background-color":"#049E79","width":"176px","border-radius":"10px"}}>CONTACT</Button></Col>
       </Row>

      </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row className='Row'>
            <Col className='Col'>
    <Card className='Cards'>
      <Card.Img variant="top" src={process.env.PUBLIC_URL+"cards.png"} alt='cards images'/>
      <Card.Body>
        <Card.Title  className='title' >Anti-Bird Nets:</Card.Title>
        <Card.Text className='text' >
        We use high quality nylon nets for strong and long lasting safety nets. We use high quality nylon nets for strong and long lasting safety nets.
        </Card.Text>
        <Row >
            <Col><a href='#'><h6 style={{"font-weight":"600","fontSize":"16px","color":"#0094FF"}}>View more</h6></a></Col>
       <Col> <Button style={{"background-color":"#049E79","width":"176px","border-radius":"10px"}}>CONTACT</Button></Col>
       </Row>

      </Card.Body>
    </Card>
    </Col>
    <Col className='Col'>
    <Card className='Cards'>
      <Card.Img variant="top" src={process.env.PUBLIC_URL+"cards.png"} alt='cards images'/>
      <Card.Body>
        <Card.Title  className='title' >Duct Area Safety Nets</Card.Title>
        <Card.Text className='text' >
        We use high quality nylon nets for strong and long lasting safety nets. We use high quality nylon nets for strong and long lasting safety nets.
        </Card.Text>
        <Row >
            <Col><a href='#'><h6 style={{"font-weight":"600","fontSize":"16px","color":"#0094FF"}}>View more</h6></a></Col>
       <Col> <Button style={{"background-color":"#049E79","width":"176px","border-radius":"10px"}}>CONTACT</Button></Col>
       </Row>

      </Card.Body>
    </Card>
    </Col>
    <Col className='Col'>
    <Card className='Cards'>
      <Card.Img variant="top" src={process.env.PUBLIC_URL+"cards.png"} alt='cards images'/>
      <Card.Body>
        <Card.Title  className='title' >Construction Safety Nets:</Card.Title>
        <Card.Text className='text' >
        We use high quality nylon nets for strong and long lasting safety nets. We use high quality nylon nets for strong and long lasting safety nets.
        </Card.Text>
        <Row >
            <Col><a href='#'><h6 style={{"font-weight":"600","fontSize":"16px","color":"#0094FF"}}>View more</h6></a></Col>
       <Col> <Button style={{"background-color":"#049E79","width":"176px","border-radius":"10px"}}>CONTACT</Button></Col>
       </Row>

      </Card.Body>
    </Card>
    </Col>
    </Row>
    <Button1/>
    </Container>
    
</>
  );
}

export default BasicExample;