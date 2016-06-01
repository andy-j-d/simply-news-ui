import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

import Animate from 'react-animate-on-change';

import Article from './Article';

const ArticleList = ({articles, more, expanded, name, showMore}) => {

  const articleList = articles && articles.map((article, index) => <Article {...article} key={index} />);

  return (
    <div>
      <Col xs={12} className="article-list">
        <Animate baseClassName="example-enter" animationClassName="example-enter-active" animate={expanded}>
          {articleList}
        </Animate>
      </Col>
      { !more ?
        <Col xs={12}>
          <h4 onClick={showMore} className="clickable">More from {name}</h4>
        </Col>
        : null
      }
    </div>
  );

};

export default ArticleList;
