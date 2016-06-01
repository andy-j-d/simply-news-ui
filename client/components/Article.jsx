import React, { Component } from 'react';

import { Row, Col, Jumbotron } from 'react-bootstrap';

const Article = ({link, description, title, display_date}) => {

  description = description && description.replace(/<\/?[^>]+(>|$)/g, "");

  return(
    <article>
      <h4>
        <a href={link} target="_blank">{title}</a> &nbsp;
        <small>{display_date}</small>
      </h4>
      <p>{description}</p>
    </article>
  );
};

export default Article;
