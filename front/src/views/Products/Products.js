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
                      </tr>
                    </thead>
                    <tbody>
                      {productList.map((product, index) =>
                        <ProductRow key={index} product={product}/>
                      )}
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