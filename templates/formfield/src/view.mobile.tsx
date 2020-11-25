import React, { Component, ChangeEvent } from 'react';

import i18next from './i18next';

import './view.mobile.less';

export default class <%- componentName%> extends Component {
  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div className="">
        <%- componentName%>
        <input value={this.props.value} onChange={this.onChange} />
      </div>
    );
  }
}