import React, { Component } from 'react';

import { Row, Col, Glyphicon } from 'react-bootstrap';

import ArticleList from './ArticleList';

import { apiURL } from '../util';

import '../styles/animations.css';

export default class NewsSource extends Component {

  getArticles(url, qty) {

    if(qty) {
      url = `${url}&qty=${qty}`;
    }

    fetch(url, {
      method: 'get'
    }).then((response) => {
      response.json().then((data) => {
        this.setState({
          articles: data
        });
      })
    }).catch((error) => {
      console.warn('deliver articles error', error);
    });

  }

  constructor(props) {

    super(props);

    this.state = {
      articles: [],
      more: false,
      expanded: true,
      articleUrl: `${apiURL}/deliver_articles/?rss_url=${props.rss_url}`
    };

    this.getArticles(this.state.articleUrl, 2);

  }

  toggleMore() {
    if (this.state.articles.length <= 3) {
      this.getArticles(this.state.articleUrl, 20);
    }
    this.setState((previousState) => {
      return {
        more: !previousState.more
      };
    });
  };

  handleClickExpand() {
    this.setState((previousState) => {
      return {
        expanded: !previousState.expanded
      };
    });
  }

  render() {

    const { name } = this.props;

    const { articles, more, expanded } = this.state;

    const toggleButton = expanded ? 'chevron-up' : 'chevron-down';

    const style = expanded ? null : { borderBottom: '1px solid #CCC' };

    return(
      <section>
        <Row style={style}>
          <Col xs={12} className="source-title">
            <h3>{name} <Glyphicon glyph={toggleButton} className="pull-right clickable" onClick={::this.handleClickExpand} /></h3>
          </Col>
          {expanded && <ArticleList name={name} articles={articles} more={more} expanded={expanded} toggleMore={::this.toggleMore} />}
        </Row>
      </section>
    );

  }

}
