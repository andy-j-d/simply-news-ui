import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

import Animate from 'react-animate-on-change';

import Article from './Article';

const ArticleList = ({articles, more, expanded, name, toggleMore}) => {

  articles = more ? articles : articles.slice(0, 3);

  const articleList = articles && articles.map((article, index) => <Article {...article} key={index} />);

  return (
    <div>
      <Col xs={12} className="article-list">
        <Animate baseClassName="example-enter" animationClassName="example-enter-active" animate={expanded}>
          {articleList}
        </Animate>
      </Col>
      <Col xs={12}>
        <h4 onClick={toggleMore} className="clickable">{more ? 'Less' : 'More'} from {name}</h4>
      </Col>
    </div>
  );

};

export default ArticleList;
