import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#/dashboard">Inicio</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/users">Usuários</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/stores">Lojas</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/products">Produtos</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/productsstores">Produtos x Lojas</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
