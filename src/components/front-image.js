import Card from 'react-bootstrap/Card';

function ImgOverlayExample({imageSrc,content}) {
  return (
    <Card className="bg-dark text-white" >
      <Card.Img  style={{"height":"60vh","width":"100%"}} src={process.env.PUBLIC_URL+imageSrc} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Text style={{  "position":" absolute","top": "50%","left":" 50%","transform": "translate(-50%, -50%)","fontSize":"64px"}}>
       {content}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;