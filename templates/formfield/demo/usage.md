---
title: Simple Usage
order: 1
---

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Mobile,
  PC,
} from '@ali/<%- name %>';
// or
// import Mobile from '@ali/<%- name %>/lib/view.mobile';
// import PC from '@ali/<%- name %>/lib/view.pc';

class App extends Component {
  render() {
    return (
      <div style={{ width: '500px' }}>
        <h3>H5</h3>
        <Mobile />
        <h3>PC</h3>
        <PC />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
```
