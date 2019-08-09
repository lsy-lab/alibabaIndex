import React, { Component } from 'react';

import './style.css';


class InfiniteScrollingListItem extends Component {
  render() {
    const { dataItem } = this.props;
    return (
          <li className="li">
            <a href="22" className="name">{dataItem.name}</ a>
            <em className = "time">{dataItem.time}</em>
            <em className = "city">{dataItem.address}</em>          
          </li>
    );
  }
}

export default InfiniteScrollingListItem;
