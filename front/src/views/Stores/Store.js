import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import storesData from './StoresData'

class Store extends Component {

    render() {
  
      const store = storesData.find( store => store.storeid.toString() === this.props.match.params.id)
  
      const storeDetails = store ? Object.entries(store) : [['id', (<span><i className="text-muted icon-ban"></i> Não encontrado</span>)]]
  
      return (
        <div className="animated fadeIn">
          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <strong><i className="icon-info pr-1"></i>Loja id: {this.props.match.params.id}</strong>
                </CardHeader>
                <CardBody>
                    <Table responsive striped hover>
                      <tbody>
                        {
                          storeDetails.map(([key, value]) => {
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
  
  export default Store;