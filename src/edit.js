import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

class edit extends Component {
constructor(props) {
    super(props)
    this.state = {
      Name: '',
      Amount: '',
      Description: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost/laravel-react-backend/public/api/expenses/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          Name: res.data.name,
          Amount: res.data.amount,
          Description: res.data.description
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }



  Onsubmit=(e)=>{
    e.preventDefault();
    const data={
     name:this.state.Name,
     amount:this.state.Amount,
     description:this.state.Description
    };


 axios.put('http://localhost/laravel-react-backend/public/api/expenses/' + this.props.match.params.id, data)
      .then((res) => {
        console.log(res.data)
        console.log('Expense successfully updated')
      }).catch((error) => {
        console.log(error)
      })
  }

   render() {
  return (
     <Form onSubmit={this.Onsubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
               <input type="text" value={this.state.Name} onChange={(e)=>{this.setState({Name:e.target.value})}}/>
             </Form.Group>
             
            </Col>
            
            <Col>
             <Form.Group controlId="Amount">
                <Form.Label>Amount</Form.Label>
                       <input type="number" value={this.state.Amount} onChange={(e)=>{this.setState({Amount:e.target.value})}}/>
             </Form.Group>
            </Col>  
           
        </Row>
            

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
                 <input type="text" value={this.state.Description} onChange={(e)=>{this.setState({Description:e.target.value})}}/>
        </Form.Group>

       
        <Button variant="primary" size="lg" block="block" type="submit">
          Update Expense
        </Button>
      </Form>
  );
}
}

export default edit;
