import React, { Component } from 'react';

import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

import { Link, browserHistory } from 'react-router';

const onClickLink = (link) => browserHistory.push(link);

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand onClick={() => onClickLink('/')}>
              Simply News
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={() => onClickLink('/about')}>About</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid fluid className="content-container">
          <Row className="page-title">
            <Col xs={12}>
              <h2>{this.props.routes[1].pageTitle}</h2>
            </Col>
          </Row>
          {this.props.children}
        </Grid>
      </div>
    );
  }
};
