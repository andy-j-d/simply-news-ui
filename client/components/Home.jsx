import React, { Component } from 'react';

import NewsSource from './NewsSource';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      newsSources: []
    };

    fetch('http://localhost:9292/deliver_feed', {
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

    console.warn('newsSources', newsSources);

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
