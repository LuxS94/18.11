import ListGroup from 'react-bootstrap/ListGroup';
import CommentArea from './CommentArea.jsx';

const CommentList = function (co) {
    return (
         <ListGroup>
            {co.map((c) => {
                return(<ListGroup.Item key={c._id}>{c.comment} </ListGroup.Item>)
            })}
     
      
    </ListGroup>)}
    export default CommentList;