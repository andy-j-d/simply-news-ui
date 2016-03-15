import React, { Component } from 'react';

import { Grid, Row, Nav, NavItem } from 'react-bootstrap';

export default class Layout extends Component {
  render() {
    return (
      <Grid fluid>
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/about" title="About">About</NavItem>
        </Nav>
        <Row>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
};
