import React from 'react';
import Setter from './setter';

interface Props {
  appHelper: any; // 编辑器上下文
  value: any; // 传入的值，如果有设置propName，那么value是propName对应的值
  onChange: (value: any) => void; // 将新的propName对应的值，通过onChange返回
}

const CustomSetter = (props: Props) => {
  return <Setter {...props} />;
};

export default CustomSetter;
