import React from 'react';
import { Switch } from 'antd';
import './style.less';

const SuiteSetterDemo = {
  handleChange(checked) {
    this.setFieldProps('leaveReason', {
      hidden: !checked,
    });
  },

  setterRender() {
    return (
      <div>
        <div>{this.props.label}</div>
        <Switch defaultChecked onChange={this.handleChange} />
      </div>
    );
  },
};

export default SuiteSetterDemo;
