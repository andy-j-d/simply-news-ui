import React, { Component } from 'react';

import { Row, Col, Jumbotron } from 'react-bootstrap';

export default class About extends Component {

  render() {

    const style = {
      margin: '0 -15px',
      borderRadius: 0
    };

    return(
      <Row>
        <Col xs={12}>
          <Jumbotron fluid style={style}>
            <h3>Read the news!</h3>
          </Jumbotron>
        </Col>
      </Row>
    );
  }

};
