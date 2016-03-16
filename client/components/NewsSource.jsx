import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

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
      articleUrl: `http://localhost:9292/deliver_articles/?rss_url=${props.rss_url}`
    };

    this.getArticles(this.state.articleUrl, 2);

  }

  handleClickMore() {
    this.getArticles(this.state.articleUrl);
  };

  render() {

    const { name } = this.props;

    const { articles } = this.state;

    const displayArticles = articles.map((article) => {

      let description;

      if (article.description) { description = article.description.replace(/<\/?[^>]+(>|$)/g, ""); }

      return(
        <article>
          <h4>
            <a href={article.link} target="_blank">{article.title}</a> &nbsp;
            <small>{article.display_date}</small>
          </h4>
          <p>{description}</p>
        </article>
      );
    });

    return(
      <section>
        <Row>
          <Col xs={12} className="source-title">
            <h3>{name}</h3>
          </Col>
          <Col xs={12} className="article-list">
            {displayArticles}
          </Col>
          <Col xs={12}>
            <h4 onClick={::this.handleClickMore}>More from {name}</h4>
          </Col>
        </Row>
      </section>
    )
  }

}
