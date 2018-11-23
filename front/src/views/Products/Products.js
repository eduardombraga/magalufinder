import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import productsData from './productsData'

function ProductRow(props) {
    const product = props.product
    const productLink = `#/products/${product.id}`
  
    return (
      <tr key={product.id.toString()}>
          <th scope="row"><a href={productLink}>{product.id}</a></th>
          <td><a href={productLink}>{product.productname}</a></td>
          <td>{product.productvalue}</td>
          <td>{product.description}</td>
      </tr>
    )
  }