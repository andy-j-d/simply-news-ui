import React, { Component } from 'react';

import { Row, Col, Jumbotron } from 'react-bootstrap';

const About = () => {

  const style = {
    margin: '0 -15px 1em',
    borderRadius: 0
  };

  return(
    <Row>
      <Col xs={12}>
        <Jumbotron style={style}>
          <h3>
            Simply read the news. <small>Top headlines from some of the world's top news sources.</small>
          </h3>
        </Jumbotron>
        <p><strong>API:</strong> Andrew Dushane and <a href="https://github.com/jenniferkahn" target="_blank">Jennifer Kahn</a></p>
        <p><strong>User Interface:</strong> <a href="https://github.com/andy-j-d" target="_blank">Andrew Dushane</a></p>
      </Col>
    </Row>
  );
};

export default About;
