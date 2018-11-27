import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {fetchObj, fetchObjs, deleteObj} from '../../actions';

import storesData from './StoresData'

function StoreRow(props) {
    const store = props.store
    const storeLink = `#/stores/${store.storeid}`
  
    return (
      <tr key={store.storeid.toString()}>
          <th scope="row"><a href={storeLink}>{store.storeid}</a></th>
          <td><a href={storeLink}>{store.cep}</a></td>
          <td>{store.description}</td>
      </tr>
    )
  }

class Stores extends Component {

    constructor(){
        super();
        this.state = {
            stores: [],
            url: '/stores'
        }
    }

render() {

    const storeList = storesData.filter((store) => store.storeid)

    return (
    <div className="animated fadeIn">
        <Row>
        <Col xl={6}>
            <Card>
            <CardHeader>
                <i className="fa fa-align-justify"></i> Lojas <small className="text-muted">listagem</small>
            </CardHeader>
            <CardBody>
                <Table responsive hover>
                <thead>
                    <tr>
                    <th scope="col">filial</th>
                    <th scope="col">cep</th>
                    <th scope="col">descricao</th>
                    </tr>
                </thead>
                <tbody>
                    {storeList.map((store, index) =>
                    <StoreRow key={index} store={store}/>
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

export default Stores;