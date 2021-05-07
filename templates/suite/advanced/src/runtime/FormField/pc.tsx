import React from 'react';
import { Input } from 'antd';

import './pc.less';

/**
 * 自定义控件运行态 PC 视图
 */
const FormField = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    const { form } = this.props;
    form.setFieldValue('leaveHowLong', e.target.value);
  },

  fieldRender() {
    const { form } = this.props;
    const field = form.getFieldInstance('leaveHowLong');
    const label = form.getFieldProp('leaveHowLong', 'label');
    const placeholder = form.getFieldProp('leaveHowLong', 'placeholder');

    return (
      <div className="pc-custom-field-wrap">
        <div className="label">{label}</div>
        {field?.props?.viewMode ? (
          field.getValue()
        ) : (
          <Input placeholder={placeholder} onChange={this.handleChange} />
        )}
      </div>
    );
  },
};

export default FormField;
