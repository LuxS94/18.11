import { Card } from 'react-bootstrap';
import BFantasy from '../data/books/fantasy.json'
import { Container, Row, Col ,Button,Form} from 'react-bootstrap';
import CommentArea from './CommentArea.jsx';

const SingleBook = ()=>{
    
    return (
      <Container><Row className="justify-content-center ">
      { BFantasy.map((libri)=>{
        return( <Col key={libri.asin} sm={12} md={6} lg={4}><Card className='mt-5' style={{ width: 'auto' }}>
      <Card.Img variant="top" src={libri.img} />
      <Card.Body>
        <Card.Title>{libri.title}</Card.Title>
        <Card.Text>
         Category: {libri.category}
        </Card.Text>
         <CommentArea asin={libri.asin} />
      </Card.Body>
    </Card></Col>)})
      }
     </Row></Container>)
}
export default SingleBook;