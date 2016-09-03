import React, { Component } from 'react';

import { connect } from 'react-redux';

import { requestAllArticles } from '../actions';

import NewsSource from './NewsSource';

import { apiURL } from '../util';

class Home extends Component {

  componentWillMount() {
    this.props.requestAllArticles();
  }

  render() {
    return(
      <div>
        {this.props.feed.map(source => (
          <NewsSource {...source} key={source.id} />
        ))}
      </div>
    );
  }

}

export default connect(({ feed }) => ({ feed }), { requestAllArticles })(Home);
