import React, { Component } from 'react';

import { Row, Col, Jumbotron } from 'react-bootstrap';

const About = () => {

  const style = {
    margin: '0 -15px',
    borderRadius: 0
  };

  return(
    <Row>
      <Col xs={12}>
        <Jumbotron fluid style={style}>
          <h3>
            Simply read the news. <small>Top headlines from some of the world's top news sources.</small>
          </h3>
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default About;
