import React from 'react';
import { Input } from 'antd';
import { IFormField } from '../../types';

import './pc.less';

const { TextArea } = Input;

interface ISwapFormField extends IFormField {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 自定义控件运行态 PC 视图
 */
const FormField: ISwapFormField = {
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { form } = this.props;
    form.setFieldValue('leaveReason', e.target.value);
    console.log(form.getFieldValue('leaveReason'));
  },

  fieldRender() {
    const { form } = this.props;
    const field = form.getFieldInstance('leaveReason');
    const label = form.getFieldProp('leaveReason', 'label');
    const placeholder = form.getFieldProp('leaveReason', 'placeholder');
    const showCount = form.getFieldProp('leaveReason', 'showTextcount');

    return (
      <div className="pc-custom-field-wrap">
        <div className="label">{label}</div>
        {field.getProp('viewMode') ? (
          field.getValue()
        ) : (
          <TextArea
            showCount={showCount}
            maxLength={100}
            placeholder={placeholder}
            onChange={this.handleChange}
          />
        )}
      </div>
    );
  },
};

export default FormField;
