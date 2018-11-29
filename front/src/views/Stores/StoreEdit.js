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
import {fetchObj, updateObj, fetchObjs} from '../../actions';

class StoreEdit extends Component {
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
    updateObj(`${this.state.url}/`, this.state)
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
                Editar filial
              </CardHeader>
              <CardBody>
                <Form action="" method="post" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="storeid">Filial</Label>
                    <Input type="text" id="storeid" name="storeid" placeholder="codigo da filial" autoComplete="storeid" value={this.state.storeid} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="cep">Cep</Label>
                    <Input type="text" id="cep" name="cep" placeholder="Cep" autoComplete="cep" value={this.state.cep} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Descrição</Label>
                    <Input type="text" id="description" name="description" placeholder="Descreva a filial" autoComplete="description" value={this.state.description} onChange={this.handleChange} />
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

export default StoreEdit;
