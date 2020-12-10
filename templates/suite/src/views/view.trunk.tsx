import TestSuite from './TestSuite';
import TestField from './TestField';

// key: 如果是套件 `${bizType}`   如果是组件：`${componentName}`
export default {
  'test.test': TestSuite,
  TestField: TestField,
};
