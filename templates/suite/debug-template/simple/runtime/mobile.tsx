import React, { Component } from "react";
export default class Suite extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    /**
     * store是整个OA审批运行态的上下文对象，它提供了丰富的API: https://yuque.antfin-inc.com/bzgmsr/xdp0i3/gwexqa
     */
    return (
      <div className="mobile-wrap">
        {this.props.form.getFields().map((field) => {
          return field.renderComponent();
        })}
      </div>
    );
  }
}
