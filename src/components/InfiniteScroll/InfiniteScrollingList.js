import React, { Component } from 'react';
import './index.css'

import InfiniteScrollingListItem from './Item/InfiniteScrollingListItem';


class InfiniteScrollingList extends Component {
  componentDidMount() {
    const { speed } = this.props;
    const scrollSpeed = speed ? speed : 20;
    const scrollContent = document.getElementById('scrollContent');
    const scrollDiv1 = document.getElementById('scrollDiv1');

    function Marquee() {
      scrollContent.scrollTop++;
      if( scrollContent.scrollTop + scrollContent.clientHeight === scrollDiv1.clientHeight ){
        scrollContent.scrollTop = 0
      }
    }

    let MyMar = setInterval(Marquee, scrollSpeed);
    scrollContent.onmouseover = function StopScroll() {
      clearInterval(MyMar);
    };

    scrollContent.onmouseout = function StartScroll() {
      MyMar = setInterval(Marquee, scrollSpeed);
    };
  }

  setStyle(h, w) {
    return {
      overflow: 'hidden',
      height: h,
      width: w,
    };
  }

  render() {
    const { data, width, height,url,title } = this.props;
    const h = height ? height : '250px';
    const w = width ? width : '800px';
    const tableData = data ? data.map((dataItem, index) =>
      <InfiniteScrollingListItem
        key={index}
        dataItem={dataItem}
      />
    ) : null;

    return (
      <div>
        <div className='title'>
          {title}
          <a href={url}>更多</ a>
        </div>
        <div id='scrollContent' style={this.setStyle(h, w)}>
          <div id='scrollDiv1'>
            <ul>
              {tableData}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default InfiniteScrollingList;
