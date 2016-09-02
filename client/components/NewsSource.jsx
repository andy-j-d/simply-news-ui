import React, { Component } from 'react';

import { connect } from 'react-redux';

import { toggleExpanded, toggleMore } from '../actions';

import { Row, Col, Glyphicon } from 'react-bootstrap';

import ArticleList from './ArticleList';

import { apiURL } from '../util';

import '../styles/animations.css';

class NewsSource extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.articleUrl = `${apiURL}/articles/?url=${props.rss_url}`;
  }

  componentWillMount() {
    this.getArticles();
  }

  componentWillReceiveProps({ refresh }) {
    if (refresh !== this.props.refresh) {
      this.setState({
        fetching: true
      });
      this.getArticles().then(()=> this.setState({
        fetching: false
      }));
    }
  }

  getArticles(qty) {

    const url = `${this.articleUrl}${qty ? `&qty=${qty}` : ''}`;

    return fetch(url, {
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

  render() {

    const { more, expanded, name, id, toggleMore, toggleExpanded } = this.props;

    const { articles, fetching } = this.state;

    if (articles.length === 0) return null;

    const toggleButton = fetching ? 'refresh' : (expanded ? 'chevron-up' : 'chevron-down');
    const style = expanded ? null : { borderBottom: '1px solid #CCC' };

    return(
      <section>
        <Row style={style}>
          <Col xs={12} className="source-title">
            <h3>
              {name}{' '}
              <Glyphicon glyph={toggleButton} className="pull-right clickable" onClick={() => toggleExpanded(id)} />
            </h3>
          </Col>
          {expanded && <ArticleList name={name} articles={articles} more={more} toggleMore={() => toggleMore(id)} />}
        </Row>
      </section>
    );

  }

}

const mapStateToProps = ({ feed }, { id }) => {
  const { expanded, more } = feed.find(s => s.id === id);
  return {
    expanded,
    more
  }
};

export default connect(mapStateToProps, { toggleMore, toggleExpanded })(NewsSource);
