import React from 'react';

import { connect } from 'react-redux';

import { Grid, Row, Col, Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

import { Link, browserHistory } from 'react-router';

import { requestAllArticles } from '../actions';

const onClickLink = link => browserHistory.push(link);

const Layout = ({ children, requestAllArticles, routes }) => (
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
          {routes[1].pageTitle}{' '}
          <span className="pull-right refresh-button">
            {routes[1].pageTitle === 'News Feed' &&
            <Glyphicon glyph="refresh" className="clickable icon" onClick={requestAllArticles} />}
          </span>
        </h2>
      </Col>
    </Row>
    <Grid fluid className="content-container">
      {children}
    </Grid>
  </div>
);

export default connect(null, { requestAllArticles })(Layout);
