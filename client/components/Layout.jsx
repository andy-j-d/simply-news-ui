import React, { Component, cloneElement } from 'react';

import { Grid, Row, Col, Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

import { Link, browserHistory } from 'react-router';

const onClickLink = link => browserHistory.push(link);

export default class Layout extends Component {

  constructor(props) {
    super(props);
    this.refresh = ::this.refresh;
    this.state = {
      refresh: 0
    }
  }

  refresh() {
    this.setState(({ refresh }) => ({
      refresh: refresh + 1
    }));
  }

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
        <Row className="page-title">
          <Col xs={12}>
            <h2>
              {this.props.routes[1].pageTitle}{' '}
              <span className="pull-right refresh-button"><Glyphicon glyph="refresh" onClick={this.refresh} /></span>
            </h2>
          </Col>
        </Row>
        <Grid fluid className="content-container">
          {cloneElement(this.props.children, { refresh: this.state.refresh })}
        </Grid>
      </div>
    );
  }
};
