import React, { Component } from 'react';

import { Row, Col, Glyphicon } from 'react-bootstrap';

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
      articleUrl: `http://localhost:9292/deliver_articles/?rss_url=${props.rss_url}`
    };

    this.getArticles(this.state.articleUrl, 2);

  }

  handleClickMore() {
    this.setState({
      more: true
    });
    this.getArticles(this.state.articleUrl, 20);
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

    let toggleButton;

    expanded ? toggleButton = 'chevron-up' : toggleButton = 'chevron-down';

    const articleList = articles.map((article, index) => {

      let description;

      if (article.description) { description = article.description.replace(/<\/?[^>]+(>|$)/g, ""); }

      return(
        <article key={index}>
          <h4>
            <a href={article.link} target="_blank">{article.title}</a> &nbsp;
            <small>{article.display_date}</small>
          </h4>
          <p>{description}</p>
        </article>
      );
    });

    let displayArticles;

    let style = { borderBottom: '1px solid #CCC' };

    if(expanded) {
      displayArticles = (
        <div>
          <Col xs={12} className="article-list">
            {articleList}
          </Col>
          { !more ?
            <Col xs={12}>
              <h4 onClick={::this.handleClickMore} className="clickable">More from {name}</h4>
            </Col>
            : null
          }
        </div>
      );
      style = null;
    }

    return(
      <section>
        <Row style={style}>
          <Col xs={12} className="source-title">
            <h3>{name} <Glyphicon glyph={toggleButton} className="pull-right clickable" onClick={::this.handleClickExpand} /></h3>
          </Col>
          {displayArticles}
        </Row>
      </section>
    )
  }

}
