import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import productsstoresData from './ProductsStoresData'

function ProductStoreRow(props) {
  const productstore = props.productstore
  const productstoreLink = `#/productsstores/${productstore.productid}`

  return (
    <tr key={productstore.id.toString()}>
        <th scope="row"><a href={productstoreLink}>{productstore.productid}</a></th>
        <td><a href={productstoreLink}>{productstore.productid}</a></td>
        <td>{productstore.storeid}</td>
    </tr>
  )
}