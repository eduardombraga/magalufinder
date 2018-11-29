import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
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
            url: '/stores/edit',
            urlInsert: '/stores/insert'
        }
    }

    componentDidMount() {
        // List
      fetchObjs('/stores').then((response) => {
        console.log({response});
        this.setState({
            stores: response
        })
      });
    }

    // Customized functions
    columStoreid(id){
        console.log(`${this.state.url}/`);
    }

    columCep(id){
        console.log(id);
    }

    columDescription(id){
        console.log(id);
    }

    editar(id){
        console.log('editar ' + id);
        // Editar
        fetchObj(`/stores`, id).then((response) => {
            console.log({response});
            this.setState({
                stores: response
            })
          });
      }
    
      deletar(id){
        console.log('deletar ' + id);
        // Delete
        deleteObj(`/stores`, id).then((response) => {
            console.log({response});
            this.setState({
                stores: response
            })
          });
      }

render() {

    const storeList = storesData.filter((store) => store.storeid)

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
                <i className="fa fa-align-justify"></i> Lojas <small className="text-muted">listagem</small>
            </CardHeader>
            <CardBody>
                <Table responsive hover>
                <thead>
                    <tr>
                    <th scope="col">filial</th>
                    <th scope="col">cep</th>
                    <th scope="col">descricao</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {this.state.stores ? 
                    this.state.stores.map((store, index) => {
                        return ([
                            <tr key={index}>
                            <td scope="col" onClick={() => this.columStoreid(store.storeid)}>{store.storeid}</td>
                            <td scope="col" onClick={() => this.columCep(store.storeid)}>{store.cep}</td>
                            <td scope="col" onClick={() => this.columDescription(store.storeid)}>{store.description}</td>
                            <td scope="col" onClick={() => this.props.history.push(`${this.state.url}/${store.storeid}`)}>editar</td>
                            <td scope="col" onClick={() => this.deletar(store.storeid)}>deletar</td>
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

export default Stores;