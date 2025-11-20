import CommentList from './CommentList.jsx';
import { Component } from 'react';

class CommentArea extends Component {
    state = {
        comments: [],
        rate:'',
        elementId: ''
    }
    getComments = () => {
        const url = `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`
        fetch(url, {
            headers: {
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYzk4YWY0YmQ0NzAwMTU4NWIyMWYiLCJpYXQiOjE3NjI1MTEyNDIsImV4cCI6MTc2MzcyMDg0Mn0.j4Iw6aqHQeAe2n4FaXV4gG9eCOJ_DjKItsGvLxNnnL0"}
    })
        .then(res => {
            if (res.ok) {return res.json()}
            else {throw new Error("Errore nel recupero dei commenti")}
        })
        .then(comments => this.setState({comments}))
        .catch(err => console.log(err))
    }
    componentDidMount() {
    this.getComments();}
    render() {
        return(<>
            <CommentList/></>
        )}}
        export default CommentArea;