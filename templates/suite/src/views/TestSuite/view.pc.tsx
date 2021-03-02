import React, { Component, PropTypes } from 'react';

import i18next from './i18next';

import styles from './view.pc.module.less';

export default class TestSuite extends Component {
  render() {
    // 如果不需要定制视图 这里直接return null即可 引擎会默认识别children进行渲染
    // return null;
    // 定制渲染

    /**
     * store是整个OA审批运行态的上下文对象，它提供了丰富的API: https://yuque.antfin-inc.com/bzgmsr/xdp0i3/gwexqa
     */
    const store = this.props.store;
    return (
      <div className={styles.wrap}>
        TestSuite
        {store.getChildren().map(field => {
          return (
            <div>
              Component Name: {field.getComponentName()}
              {field.renderComponent()}
            </div>
          );
        })}
      </div>
    );
  }
}
