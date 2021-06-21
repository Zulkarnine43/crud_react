import React, {Component} from "react";
import axios from 'axios';
import { Table,Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

class result_list extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost/laravel-react-backend/public/api/expenses/')
      .then(res => {
        this.setState({
          expenses: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })   
  }



  deleteExpense(id) {
        axios.delete('http://localhost/laravel-react-backend/public/api/expenses/' +id)
            .then((res) => {
                console.log('Expense removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

  render() {

   const data=this.state.expenses;

   const alldata=data.map((list,idx)=>{
  return(
   <tr>
  <td>{list.id}</td>
  <td>{list.name}</td>
  <td>{list.amount}</td>
  <td>{list.description}</td>
  <td>
     <Link  to={"/edit/" + list.id}>
       <Button size="sm" variant="info">Edit</Button>
     </Link>
       <Button onClick={()=>{this.deleteExpense(this.item.id)}} size="sm" variant="danger">Delete</Button>
  </td>
   </tr>
  	)
   });

  return (
  	 <div class="col-md-8 offset-md-2" >
                <h1>Product List</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
						{alldata}	
                    </tbody>
                </Table>
            </div>
  );
}
}


export default result_list;
