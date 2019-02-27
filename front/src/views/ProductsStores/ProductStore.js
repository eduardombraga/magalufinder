import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import productstoreData from './ProductsStoresData'

class ProductStore extends Component {

    render() {
  
      const productstore = productstoreData.find( productstore => productstore.productid.toString() === this.props.match.params.id)
  
      const productstoreDetails = productstore ? Object.entries(productstore) : [['id', (<span><i className="text-muted icon-ban"></i> Não encontrado</span>)]]
  
      return (
        <div className="animated fadeIn">
          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <strong><i className="icon-info pr-1"></i>Produto id: {this.props.match.params.id}</strong>
                </CardHeader>
                <CardBody>
                    <Table responsive striped hover>
                      <tbody>
                        {
                          productstoreDetails.map(([key, value]) => {
                            return (
                              <tr key={key}>
                                <td>{`${key}:`}</td>
                                <td><strong>{value}</strong></td>
                              </tr>
                            )
                          })
                        }
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
  
  export default ProductStore;