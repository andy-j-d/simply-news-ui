import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

export default class NewsSource extends Component {

  render() {

    const { name } = this.props;

    return(
      <section>
        <Row>
          <Col xs={12} className="source-title">
            <h3>{name}</h3>
          </Col>
          <Col xs={12} className="article-list">
            articles
          </Col>
          <Col xs={12}>
            More from {name}
          </Col>
        </Row>
      </section>
    )
  }

}
