import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import Banner from './Banner';
import Item from './Item';
export default class Body extends Component {
  render() {
    return (
      <div>

        <Banner />
        <Item />
      </div>
    )
  }
}
