import React from 'react';

import moment from 'moment';
import { trim, truncate } from 'lodash';

const scrubText = (text) => text ? text.replace(/(<\/?[^>]+(>|$))|(&(.*?);)/g, "") : '';

const formatDate = (date) => date && moment(date).fromNow();

const Article = ({ link, content, title, published }) => {

  const description = truncate(trim(scrubText(content)), {
    'length': 500,
    'separator': ' '
  });

  const realDescription = description.split(' ').length > 1;

  return(
    <article>
      <h4>
        <a href={link} target="_blank">{scrubText(title)}</a> &nbsp;
        <small>{formatDate(published)}</small>
      </h4>
      {realDescription && <p>{description}</p>}
    </article>
  );
};

export default Article;
