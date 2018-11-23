import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

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

    render() {
  
      const productstoreList = productsstoresData.filter((productstore) => productstore.productid)
  
      return (
        <div className="animated fadeIn">
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
                      </tr>
                    </thead>
                    <tbody>
                      {productstoreList.map((productstore, index) =>
                        <ProductStoreRow key={index} productstore={productstore}/>
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
  
export default ProductsStores;