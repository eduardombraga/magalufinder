import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import {fetchObj} from '../../actions';

import usersData from './UsersData'

class User extends Component {

    constructor(){
        super();
        this.state = {
            user: [],
            url: '/user'
        }
    }

    componentDidMount() {
      fetchObj('/user').then((response) => {
        console.log({response});
        this.setState({
            user: response
        })
      });
    }

  render() {

    const user = usersData.find( user => user.id.toString() === this.props.match.params.id)

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {this.state.user ? 
                        this.state.user.map((user, index) => {
                            return ([
                                <tr key={index}>
                                <td scope="col" onClick={() => this.columId(user.id)}>{user.id}</td>
                                <td scope="col" onClick={() => this.columName(user.id)}>{user.username}</td>
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

export default User;
