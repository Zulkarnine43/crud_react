import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

 class home extends Component {

constructor(props) {
    super(props)
    this.state = {
      Name: '',
      Amount: '',
      Description: ''
    }
  }


  Onsubmit=(e)=>{
    e.preventDefault();
    const data={
     name:this.state.Name,
     amount:this.state.Amount,
     description:this.state.Description
    };

  axios.post('http://localhost/laravel-react-backend/public/api/expenses',data)
  .then((response)=>{console.log('successfully')})
  .catch(function (error) {
    console.log(error);
  })
  }

   render() {
  return (
     <Form onSubmit={this.Onsubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
               <input type="text" placeholder="Name" onChange={(e)=>{this.setState({Name:e.target.value})}}/>
             </Form.Group>
             
            </Col>
            
            <Col>
             <Form.Group controlId="Amount">
                <Form.Label>Amount</Form.Label>
                       <input type="number" placeholder="Amount" onChange={(e)=>{this.setState({Amount:e.target.value})}}/>
             </Form.Group>
            </Col>  
           
        </Row>
            

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
                 <input type="text" placeholder="Description" onChange={(e)=>{this.setState({Description:e.target.value})}}/>
        </Form.Group>

       
        <Button variant="primary" size="lg" block="block" type="submit">
          Add Expense
        </Button>
      </Form>
  );
}
}

export default home;
