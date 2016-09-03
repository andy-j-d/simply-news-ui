import React, { Component } from 'react';

import { connect } from 'react-redux';

import { toggleExpanded, toggleMore, getArticlesRequest } from '../actions';

import { Row, Col, Glyphicon } from 'react-bootstrap';

import ArticleList from './ArticleList';

import { apiURL } from '../util';

import '../styles/animations.css';

const NewsSource = ({ more, expanded, name, id, toggleMore, toggleExpanded, articles, fetching }) => {

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


const mapStateToProps = ({ feed }, { id }) => {
  const { expanded, more, articles, fetching } = feed.find(s => s.id === id);
  return {
    expanded,
    more,
    articles,
    fetching
  }
};

const dispatchProps = {
  toggleMore,
  toggleExpanded
}

export default connect(mapStateToProps, dispatchProps)(NewsSource);
