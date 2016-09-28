import React, { PropTypes } from 'react';

import { connect } from 'react-redux';

import { Grid, Row, Col, Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

import { Link, browserHistory } from 'react-router';

import { requestAllArticles, toggleTheme } from '../actions';

import { capitalizeFirstLetter } from '../util';

const onClickLink = link => browserHistory.push(link);

const Layout = ({ children, requestAllArticles, routes, toggleTheme, theme }) => (
  <div className={theme}>
    <Navbar fixedTop fluid>
      <Navbar.Header>
        <Navbar.Brand onClick={() => onClickLink('/')}>
          Simply News
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'} Theme
          </NavItem>
          <NavItem onClick={() => onClickLink('/about')}>About</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Row className="page-title">
      <Col xs={12}>
        <h2>
          {routes[1].pageTitle}{' '}
          <span className="pull-right refresh-button">
            {routes[1].pageTitle === 'News Feed' && [
              <Glyphicon 
                glyph="adjust" className="clickable icon" onClick={toggleTheme} key={1} style={{ marginRight: 15 }}
              />,
              <Glyphicon glyph="refresh" className="clickable icon" onClick={requestAllArticles} key={2} />,
            ]}
          </span>
        </h2>
      </Col>
    </Row>
    <Grid fluid className="content-container">
      {children}
    </Grid>
  </div>
);

const mapStateToProps = ({ theme }) => ({ theme });

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  requestAllArticles: PropTypes.func.isRequired,
  routes: PropTypes.any.isRequired,
  theme: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, { requestAllArticles, toggleTheme })(Layout);
