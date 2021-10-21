import SwapDemoSetter from "@/src/designer/setter/CustomSetter";
import createReactClass from "create-react-class";
import assign from "lodash/assign";
import map from "lodash/map";
import find from "lodash/find";

const Setter = createReactClass({
  mixins: [SwapDemoSetter],
  componentWillMount() {
    this.setterWillMount && this.setterWillMount();
  },
  componentDidMount() {
    this.setterDidMount && this.setterDidMount();
  },
  componentDidUpdate() {
    this.setterDidUpdate && this.setterDidUpdate();
  },

  // 获取套件属性
  getSuiteProps() {
    const { appHelper } = this.props;
    const activeKey = appHelper.activeKey;
    const currentSchema = appHelper.schemaHelper.schemaMap[activeKey];

    return currentSchema.props;
  },

  // 更新套件属性
  setSuiteProps(props) {
    const { appHelper } = this.props;
    const activeKey = appHelper.activeKey;
    const currentSchema = appHelper.schemaHelper.schemaMap[activeKey];

    currentSchema.props = assign({}, currentSchema.props || {}, props);
    appHelper.emit("material.update", {
      swapKey: appHelper.activeKey,
      props: {
        ...currentSchema.props,
      },
    });
  },

  // 获取某个field的props
  getFieldProps(bizAlias) {
    const { appHelper } = this.props;
    const activeKey = appHelper.activeKey;
    const currentSchema = appHelper.schemaHelper.schemaMap[activeKey];
    const children = currentSchema.children;
    const choosedChildren = find(children, (item) => {
      return item.props.bizAlias === bizAlias;
    });

    return choosedChildren?.props;
  },

  // 更新某一个childField的props
  setFieldProps(bizAlias, props) {
    const { appHelper } = this.props;
    const activeKey = appHelper.activeKey;
    const currentSchema = appHelper.schemaHelper.schemaMap[activeKey];
    const children = currentSchema.children;
    const childrenNew = map(children, (item) => {
      if (item.props.bizAlias === bizAlias) {
        item.props = assign({}, item.props || {}, props);
      }
      return item;
    });

    appHelper.emit("material.update", {
      swapKey: appHelper.activeKey,
      props: {
        children: childrenNew,
      },
    });
  },

  // 获取children列表
  getAllFieldProps() {
    const { appHelper } = this.props;
    const activeKey = appHelper.activeKey;
    const currentSchema = appHelper.schemaHelper.schemaMap[activeKey];
    const children = currentSchema.children;

    return children;
  },

  setAllFieldProps(childrenNew) {
    const { appHelper } = this.props;
    appHelper.emit("material.update", {
      swapKey: appHelper.activeKey,
      props: {
        children: childrenNew,
      },
    });
  },

  render() {
    if (this.setterRender) {
      return this.setterRender();
    }

    return null;
  },
});

export default Setter;
