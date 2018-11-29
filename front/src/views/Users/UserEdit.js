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

class UserEdit extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
        username: '',
        userpassword: '',
        useradmin: false,
      collapse: true,
      fadeIn: true,
      timeout: 300,
      url: '/users',
      cancelUrl: '/dashboard'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.state.useradmin = 0 ? true : false;
    updateObj(`${this.state.url}/`+match.params.id, {username:this.state.username, userpassword:this.state.userpassword, useradmin:this.state.useradmin})
      .then((props) => this.props.history.push(this.state.url));
      console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheckBox = (e) => {
      this.setState({ check: !this.state.check });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader>
                Editar usuário
              </CardHeader>
              <CardBody>
                <Form action="" method="post" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="username" name="username" placeholder="Username" autoComplete="Username" value={this.state.username} onChange={this.handleChange}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" id="userpassword" name="userpassword" placeholder="Password" autoComplete="Password" value={this.state.userpassword} onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup>
                    <Label htmlFor="useradmin">Usuário admin ?</Label>
                    <input type="checkbox" id="useradmin" name="useradmin" checked={this.state.useradmin} value={this.state.useradmin} onChange={this.handleChange} />
                    </InputGroup>
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

export default UserEdit;
