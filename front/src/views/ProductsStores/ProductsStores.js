import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {fetchObj, fetchObjs, deleteObj, deleteObj2} from '../../actions';

import productsstoresData from './ProductsStoresData'

function ProductStoreRow(props) {
  const productstore = props.productstore
  const productstoreLink = `#/productsstores/${productstore.productid}`

  return (
    <tr key={productstore.productid.toString()}>
        <th scope="row"><a href={productstoreLink}>{productstore.productid}</a></th>
        <td>{productstore.storeid}</td>
    </tr>
  )
}

class ProductsStores extends Component {

  constructor(){
    super();
    this.state = {
        productsstores: [],
        url: '/productsstores',
        urlInsert: '/productsstores/insert'
    }
    }

    componentDidMount() {
        // List
      fetchObjs('/productsstores').then((response) => {
        console.log({response});
        this.setState({
            productsstores: response
        })
      });
    }
  
    // Customized functions
    columProductId(id){
        console.log(`${this.state.url}/`);
    }
  
    columStoreId(id){
      console.log(id);
  }
  
    editar(id){
      console.log('editar ' + id);
      // Editar
      fetchObj(`/productsstores`, id).then((response) => {
          console.log({response});
          this.setState({
            productsstores: response
          })
        });
    }
  
    deletar(id, id2){
      console.log('deletar ' + id);
      // Delete
      deleteObj2(`/productsstores`, id, id2).then((response) => {
          console.log({response});
          this.setState({
              productsstores: response
          })
        });
    }

    render() {
  
      const productstoreList = productsstoresData.filter((productstore) => productstore.productid)
  
      return (
        <div className="animated fadeIn">
        <Row>
        <Col xl={2}>
        <Card><Button type="submit" onClick={() => this.props.history.push(`${this.state.urlInsert}`)} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Novo</Button></Card>
        </Col>
        </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Produtos x Lojas <small className="text-muted">listagem</small>
                </CardHeader>
                <CardBody>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th scope="col">produto</th>
                        <th scope="col">loja</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.productsstores ? 
                        this.state.productsstores.map((productsstores, index) => {
                            return ([
                                <tr key={index}>
                                <td scope="col" onClick={() => this.columId(productsstores.productid)}>{productsstores.productid}</td>
                                <td scope="col" onClick={() => this.columName(productsstores.storeid)}>{productsstores.storeid}</td>
                                <td scope="col" onClick={() => this.props.history.push(`${this.state.url}/${productsstores.productid}`)}>editar</td>
                                <td scope="col" onClick={() => this.deletar(productsstores.productid, productsstores.storeid)}>deletar</td>
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
  
export default ProductsStores;