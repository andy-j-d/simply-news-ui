import React, { Component } from 'react';

import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/"><a>Simply News</a></LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
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
