
// 完整配置见 https://notes.dingtalk.com/doc/E0Vzg5OZ0M3eZmJe?orgId=16872003&dd_progress=false&showmenu=false
export default {
  componentName: 'DDBizSuite',
  name: '业务套件',
  description: '',
  icon: '',
  category: '',
  isUnique: true,
  isSuite: true,
  isContainer: true,
  setters: [
    {
      propName: 'label',
      setterName: 'Input',
      props: {
        label: '标题',
        subLabel: '最长20个字符',
        maxLength: 20,
        validateMessage: {
          required: '不能为空',
        },
      },
    },
  ],
  props: {
    bizType: 'test.test', // 套件业务唯一标识 需要审批同学协助约定
    bizAlias: 'test', // 需要审批同学协助约定
    extract: true, // 固定属性 无需修改
  },
  children: [{
    "componentName": "InnerContactField",
    "props": {
      "bizAlias": "applicant", // children中每个组件需要加入bizAlias 业务方自行确定用于数据解析
      "placeholder": "请选择申请人",
      "label": "申请人",
      "disabled": true
    }
  }, {
    "componentName": "TextareaField",
    "props": {
      "bizAlias": "reason", // children中每个组件需要加入bizAlias 业务方自行确定用于数据解析
      "placeholder": "请输入申请理由",
      "label": "申请理由"
    }
  }],
}