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
    form.setFieldValue('leaveDestination', e.target.value);
  },

  fieldRender() {
    const { form } = this.props;
    const field = form.getFieldInstance('leaveDestination');
    const label = form.getFieldProp('leaveDestination', 'label');
    const placeholder = form.getFieldProp('leaveDestination', 'placeholder');

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
