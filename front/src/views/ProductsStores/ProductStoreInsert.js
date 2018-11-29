import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import {fetchObj, saveObj, fetchObjs} from '../../actions';

class ProductStoreInsert extends Component {
  constructor(props) {
    super(props);



    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      cancelUrl: '/dashboard'
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    saveObj(this.state.url, this.state)
      .then((props) => this.props.history.push(this.state.url));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                Inserir produto x loja
              </CardHeader>
              <CardBody>
                <Form action="" method="post" onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <Label htmlFor="vat">Produto</Label>
                    <Input type="text" id="productid" name="productid" placeholder="codigo do produto" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="street">Filial</Label>
                    <Input type="text" id="storeid" name="storeid" placeholder="codigo da filial" />
                </FormGroup>
                  <FormGroup className="form-actions">
                    <Button type="submit" size="sm" color="success">Gravar</Button>
                    <Button type="reset" onClick={() => this.props.history.push(`${this.state.cancelUrl}`)} size="sm" color="danger"><i className="fa fa-ban"></i> Cancelar</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductStoreInsert;
