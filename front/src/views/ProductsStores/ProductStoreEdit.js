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
import {fetchObj, updateObj} from '../../actions';

class ProductStoreEdit extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
        productid: '',
        storeid: '',
        collapse: true,
        fadeIn: true,
        timeout: 300,
        url: '/productsstores',
        cancelUrl: '/dashboard'
    };
  }

  componentDidMount = () => {
    const { match } = this.props;
    if (match.params.id) {
      fetchObj(this.state.url, match.params.id)
        .then((response) => {
          this.setState({ ...response[0] });
        });
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { match } = this.props;
    updateObj(`${this.state.url}/`+match.params.id, {productid:this.state.productid, storeid:this.state.storeid})
      .then((props) => this.props.history.push(this.state.url));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                Editar produto x loja
              </CardHeader>
              <CardBody>
                <Form action="" method="post" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="productid">Produto</Label>
                    <Input type="text" id="productid" name="productid" placeholder="codigo do produto" autoComplete="productid" value={this.state.productid} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="storeid">Filial</Label>
                    <Input type="text" id="storeid" name="storeid" placeholder="codigo da filial" autoComplete="storeid" value={this.state.storeid} onChange={this.handleChange} />
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

export default ProductStoreEdit;
