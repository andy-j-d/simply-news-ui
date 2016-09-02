import React, { Component } from 'react';

import { connect } from 'react-redux';

import NewsSource from './NewsSource';

import { apiURL } from '../util';

const Home = ({ feed, refresh }) => (
  <div>
    {feed.map(source => (
      <NewsSource {...source} key={source.id} refresh={refresh} />
    ))}
  </div>
);

export default connect(({ feed }) => ({ feed }))(Home);
