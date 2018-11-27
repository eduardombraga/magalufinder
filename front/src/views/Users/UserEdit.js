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
        id: '',
        username: '',
        userpassword: '',
      collapse: true,
      fadeIn: true,
      timeout: 300,
      cancelUrl: '/dashboard'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    const { match } = this.props;
    if (match.params.id) {
      this.props.fetchObj(this.state.url, match.params.id)
        .then(() => {
          this.setState({ ...this.props });
        });
    }
    this.props.fetchObjs('/edit')
      .then(() => { this.setState({ tiposdespesas: this.props.records }) });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  saveObj = (obj) => {
    if (obj.ID) {
      return this.props.updateObj(this.state.url, this.state.nameObj, obj);
    } else {
      return this.props.saveObj(this.state.url, this.state.nameObj, obj);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.saveObj(this.state)
      .then((props) => this.props.history.push(this.state.url));
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
                      <Input type="text" id="username" name="username" placeholder="Username" autoComplete="name" value={this.state.username}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" id="userpassword" name="userpassword" placeholder="Password" autoComplete="current-password" value={this.state.userpassword}/>
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
