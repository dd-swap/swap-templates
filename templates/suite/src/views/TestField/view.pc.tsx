import React, { Component, PropTypes } from 'react';

import i18next from './i18next';

import styles from './view.pc.module.less';

export default class TestField extends Component {

  render() {
    // 如果不需要定制视图 这里直接return null即可 引擎会默认识别children进行渲染
    // return null;
    // 定制渲染
    const store = this.props.store;
    return (
      <div className={styles.wrap}>
        TestField
      </div>
    );
  }
}