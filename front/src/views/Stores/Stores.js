import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

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