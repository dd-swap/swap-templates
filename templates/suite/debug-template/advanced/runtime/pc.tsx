import React from "react";
import SwapDemoSuite from "../../src/runtime/pc";
import FormField from "./formField/pc";
import createReactClass from "create-react-class";

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
        <div>
          {this.props.form.getFields().map(field => {
            if (field.props.commonBizType === 'leaveHowLong') {
              return <FormField {...this.props} />;
            }

            return field.renderComponent();
          })}
        </div>
      </div>
    );
  },
});

export default Suite;
