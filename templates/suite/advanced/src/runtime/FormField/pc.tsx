import React from 'react';
import { Input } from 'antd';
import { IFormField } from '../../types';

import './pc.less';

interface ISwapFormField extends IFormField {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 自定义控件运行态 PC 视图
 */
const FormField: ISwapFormField = {
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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
        {field.getProp('viewMode') ? (
          field.getValue()
        ) : (
          <Input placeholder={placeholder} onChange={this.handleChange} />
        )}
      </div>
    );
  },
};

export default FormField;
