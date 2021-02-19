import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
export default class CreateProduct extends react.Component {
    constructor(props) {
        super(props);
        this.onChangeProductId = this.onChangeProductId.bind(this);
        this.onChangeOrderId=this.onChangeOrderId.bind(this);
        this.onChangeCustomerId = this.onChangeCustomerId.bind(this);
        this.onChangeProductName=this.onChangeProductName.bind(this);
        this.onChangeCompanyName=this.onChangeCompanyName.bind(this);
        this.onChangePricePerQuantity = this.onChangePricePerQuantity.bind(this);
        this.onChangeProductQuantity = this.onChangePricePerQuantity.bind(this);
        this.onChangeTotalProductStock=this.onChangeTotalProductStock.bind(this);
        
        this.state={
            productid:"",
            orderid:"",
            customerid:"",
            productname:"",
            companyname:"",
            priceperquantity:"",
            productquantity:"",
            totalproductstock:""
        }
    }
    onChangeProductId(e){
        this.setState({productid:e.target.value})
    }
    onChangeOrderId(e){
        this.setState({orderid:e.target.value})
    }
    onChangeCustomerId(e){
        this.setState({customerid:e.target.value})
    }
    onChangeProductName(e){
        this.setState({productname:e.target.value})
    }
    onChangePricePerQuantity(e){
        this.setState({priceperquantity:e.target.value})
    }
    onChangeTotalProductStock(e){
        this.setState({totalproductstock:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const productObject={
            productid:this.state.productid,
            orderid:this.state.orderid,
            customerid:this.state.customerid,
            productname:this.state.productname,
            companyname:this.state.companyname,
            priceperquantity:this.state.priceperquantity,
            productquantity:this.state.productquantity,
            totalproductstock:this.state.totalproductstock
        };
        axios.post("http://localhost:4444/products/create-product",productObject)
        .then(res => {
            this.setState({
            productid:"",
            orderid:"",
            customerid:"",
            productname:"",
            companyname:"",
            priceperquantity:"",
            productquantity:"",
            totalproductstock:""
            });
        }
        render() {
            return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Product Id</Form.Label>
          <Form.Control type="text" value={this.state.productid} onChange={this.onChangeProductId} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </Form.Group>
        }
        
        )
    }
}
