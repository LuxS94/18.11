import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import BFantasy from '../data/books/fantasy.json'


const MyFooter=function () {
  return (
    <>
    
      {[ 'light',
         ].map((variant) => (
        <Alert key={variant} variant={variant} className='text-center mt-3'>
            <div className="text-center " ><h1 >Welcome</h1>
</div>
          Qui troverai solo libri epici!
        </Alert>
      ))}
      {/* card */}
      <Container><Row className="justify-content-center ">
      { BFantasy.map((libri)=>{
        return( <Col key={libri.asin} sm={12} md={6} lg={4}><Card className='mt-5' style={{ width: 'auto' }}>
      <Card.Img variant="top" src={libri.img} />
      <Card.Body>
        <Card.Title>{libri.title}</Card.Title>
        <Card.Text>
         Category: {libri.category}
        </Card.Text>
      </Card.Body>
    </Card></Col>)})
      })
     </Row></Container>
    </>
  );
}

export default MyFooter