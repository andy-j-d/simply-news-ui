import React, { Component } from 'react';

const scrubText = (text) => text && text.replace(/(<\/?[^>]+(>|$))|(&(.*?);)/g, "");

const Article = ({link, description, title, display_date}) => {

  return(
    <article>
      <h4>
        <a href={link} target="_blank">{scrubText(title)}</a> &nbsp;
        <small>{display_date}</small>
      </h4>
      <p>{scrubText(description)}</p>
    </article>
  );
};

export default Article;
