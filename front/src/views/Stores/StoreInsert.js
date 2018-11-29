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

class StoreInsert extends Component {
  constructor(props) {
    super(props);



    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
        storeid: '',
        cep: '',
        description: '',
        collapse: true,
        fadeIn: true,
        timeout: 300,
        url: '/stores',
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
                Inserir loja
              </CardHeader>
              <CardBody>
                    <Form action="" method="post" onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <Label htmlFor="vat">Filial</Label>
                    <Input type="text" id="storeid" name="storeid" placeholder="codigo da filial" value={this.state.storeid} onChange={this.handleChange} autoComplete="storeid" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="street">Cep</Label>
                    <Input type="text" id="cep" name="cep" placeholder="Cep" value={this.state.cep} onChange={this.handleChange} autoComplete="cep" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="street">Descrição</Label>
                    <Input type="text" id="description" name="description" placeholder="Descreva a filial" value={this.state.description} onChange={this.handleChange} autoComplete="description" />
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

export default StoreInsert;
