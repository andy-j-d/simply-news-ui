import React, { Component } from 'react';

import { Row, Col, Glyphicon } from 'react-bootstrap';

import ArticleList from './ArticleList';

import { apiURL } from '../util';

import '../styles/animations.css';

export default class NewsSource extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      more: false,
      expanded: true
    };
    this.articleUrl = `${apiURL}/articles/?url=${props.rss_url}`;
  }

  componentWillMount() {
    this.getArticles(this.articleUrl, 2);
  }

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

  toggleMore() {
    if (this.state.articles.length <= 3) {
      this.getArticles(this.articleUrl, 20);
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

    const { articles, more, expanded } = this.state;

    if (articles.length === 0) return null;

    const toggleButton = expanded ? 'chevron-up' : 'chevron-down';
    const style = expanded ? null : { borderBottom: '1px solid #CCC' };

    return(
      <section>
        <Row style={style}>
          <Col xs={12} className="source-title">
            <h3>
              {this.props.name}{' '}
              <Glyphicon glyph={toggleButton} className="pull-right clickable" onClick={::this.handleClickExpand} />
            </h3>
          </Col>
          {expanded && <ArticleList name={this.props.name} articles={articles} more={more} expanded={expanded}
                                    toggleMore={::this.toggleMore} />}
        </Row>
      </section>
    );

  }

}
