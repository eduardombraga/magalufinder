import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {fetchObj, fetchObjs, deleteObj} from '../../actions';

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `#/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
        <th scope="row"><a href={userLink}>{user.id}</a></th>
        <td><a href={userLink}>{user.usuario}</a></td>
        <td>{user.admin}</td>
    </tr>
  )
}

class Users extends Component {

    constructor(){
        super();
        this.state = {
            users: [],
            url: '/users/edit',
            urlInsert: '/users/insert'
        }
    }

  componentDidMount() {
      // List
    fetchObjs('/users').then((response) => {
      console.log({response});
      this.setState({
          users: response
      })
    });
  }

  // Customized functions
  columId(id){
      console.log(`${this.state.url}/`);
  }

  columName(id){
    console.log(id);
}

columIsAdmin(id){
    console.log(id);
}

  editar(id){
    console.log('editar ' + id);
    // Editar
    fetchObj(`/users`, id).then((response) => {
        console.log({response});
        this.setState({
            users: response
        })
      });
  }

  deletar(id){
    console.log('deletar ' + id);
    // Delete
    deleteObj(`/users`, id).then((response) => {
        console.log({response});
        this.setState({
            users: response
        })
      });
  }

  render() {

    const userList = usersData.filter((user) => user.id)
    console.log({estado: this.state.users});

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
                <i className="fa fa-align-justify"></i> Usuários <small className="text-muted">listagem</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">usuario</th>
                      <th scope="col">admin</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users ? 
                        this.state.users.map((user, index) => {
                            return ([
                                <tr key={index}>
                                <td scope="col" onClick={() => this.columId(user.id)}>{user.id}</td>
                                <td scope="col" onClick={() => this.columName(user.id)}>{user.username}</td>
                                <td scope="col" onClick={() => this.columIsAdmin(user.id)}>{user.useradmin}</td>
                                <td scope="col" onClick={() => this.props.history.push(`${this.state.url}/${user.id}`)}>editar</td>
                                <td scope="col" onClick={() => this.deletar(user.id)}>deletar</td>
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

export default Users;
