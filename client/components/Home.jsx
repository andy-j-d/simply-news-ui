import React, { Component } from 'react';

import NewsSource from './NewsSource';

import { apiURL } from '../util';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      newsSources: []
    };

    fetch(`${apiURL}/feed`, {
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

    return(
      <div>
        {this.state.newsSources.map(source => (
          <NewsSource {...source} key={source.id} refresh={this.props.refresh} />
        ))}
      </div>
    );

  }

};
