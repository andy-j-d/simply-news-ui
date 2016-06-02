import React, { Component } from 'react';

import NewsSource from './NewsSource';

import { apiURL } from '../util';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      newsSources: []
    };

    fetch(`${apiURL}/deliver_feed`, {
      method: 'get'
    }).then((response) => {
      response.json().then((data) => {
        this.setState({
          newsSources: data
        });
      })

    }).catch((error) => {
      console.warn('deliver articles error', error);
    });
  }

  render() {

    const { newsSources } = this.state;

    const sources = newsSources.map((source) => {
      return <NewsSource {...source} key={source.id} />
    });

    return(
      <div>
        { sources }
      </div>
    );

  }

};
