import React from 'react';
import SwapDemoSuite from '../../src/runtime/pc';
import createReactClass from 'create-react-class';

const Suite = createReactClass({
  mixins: [SwapDemoSuite],
  componentWillMount() {
    this.suiteWillMount && this.suiteWillMount();
  },
  componentDidMount() {
    this.suiteDidMount && this.suiteDidMount();
  },
  componentDidUpdate() {
    this.suiteDidUpdate && this.suiteDidUpdate();
  },
  render() {
    if (this.suiteRender) {
      return this.suiteRender();
    }

    return (
      <div className="pc-runtime-wrap">
        {this.props.form.getFields().map(field => {
          return field.renderComponent();
        })}
      </div>
    );
  },
});

export default Suite;
