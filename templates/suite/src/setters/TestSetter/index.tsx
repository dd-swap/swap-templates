import React from 'react';


interface Props {
  appHelper: any; // 编辑器上下文
  value: any; // 传入的值，如果有设置propName，那么value是propName对应的值
  onChange: (value: any) => void; // 将新的propName对应的值，通过onChange返回
}

const TestSetter = (props: Props) => {
  // 编辑器上下文
  const { appHelper, } = props;

  // schemas: any[]; // schema数组    schemaMap: any; // schema集合，已打平
  const { schemas, schemaMap } = appHelper.schemaHelper; 

  /**
   * 慎用：如果是要修改套件children下的值，使用以下方法实现
   * appHelper.emit('material.update', {
        swapKey: appHelper.activeKey,
        props: {
          ...otherProps,
          children: childrenNew
        },
      });    //'material.update' 为固定字符串
   */

  return <div>我是一个Setter</div>;
};

export default TestSetter;
