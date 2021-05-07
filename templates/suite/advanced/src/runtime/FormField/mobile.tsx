import React from 'react';

import './mobile.less';

/**
 * 自定义控件运行态 Mobile 视图
 */

const FormField = {
  fieldRender() {
    // 如果不需要定制视图 这里直接return null即可 引擎会默认识别children进行渲染
    // return null;
    // 定制渲染
    return <div className="mobile-wrap">CustomFormFieldMobileView</div>;
  },
};

export default FormField;
