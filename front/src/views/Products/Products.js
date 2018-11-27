import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {fetchObj, fetchObjs, deleteObj} from '../../actions';

import productsData from './ProductsData'

function ProductRow(props) {
    const product = props.product
    const productLink = `#/products/${product.id}`
  
    return (
      <tr key={product.id.toString()}>
          <th scope="row"><a href={productLink}>{product.id}</a></th>
          <td><a href={productLink}>{product.productname}</a></td>
          <td>{product.productvalue}</td>
          <td>{product.description}</td>
      </tr>
    )
  }

  class Products extends Component {

    constructor(){
      super();
      this.state = {
          products: [],
          url: '/products'
      }
    }

    componentDidMount() {
        // List
      fetchObjs('/products').then((response) => {
        console.log({response});
        this.setState({
            products: response
        })
      });
    }
  
    // Customized functions
    columId(id){
        console.log(`${this.state.url}/`);
    }
  
    columProduct(id){
      console.log(id);
  }
  
  columProductValue(id){
      console.log(id);
  }
  
    editar(id){
      console.log('editar ' + id);
      // Editar
      fetchObj(`/products`, id).then((response) => {
          console.log({response});
          this.setState({
              products: response
          })
        });
    }
  
    deletar(id){
      console.log('deletar ' + id);
      // Delete
      deleteObj(`/products`, id).then((response) => {
          console.log({response});
          this.setState({
              products: response
          })
        });
    }

    render() {
  
      const productList = productsData.filter((product) => product.id)
  
      return (
        <div className="animated fadeIn">
          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Produtos <small className="text-muted">listagem</small>
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">produto</th>
                        <th scope="col">valor</th>
                        <th scope="col">descricao</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.products ? 
                        this.state.products.map((product, index) => {
                            return ([
                                <tr key={index}>
                                <td scope="col" onClick={() => this.columId(product.id)}>{product.id}</td>
                                <td scope="col" onClick={() => this.columName(product.productname)}>{product.productname}</td>
                                <td scope="col" onClick={() => this.columIsAdmin(product.productvalue)}>{product.productvalue}</td>
                                <td scope="col" onClick={() => this.columIsAdmin(product.description)}>{product.description}</td>
                                <td scope="col" onClick={() => this.props.history.push(`${this.state.url}/${product.id}`)}>editar</td>
                                <td scope="col" onClick={() => this.deletar(product.id)}>deletar</td>
                                </tr>
                            ])
                        }
                    ) :
                    null}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )
    }
  }
  
  export default Products;