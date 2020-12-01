
// 完整配置见 https://notes.dingtalk.com/doc/E0Vzg5OZ0M3eZmJe?orgId=16872003&dd_progress=false&showmenu=false
export default {
  componentName: '<%- componentName%>',
  name: '普通表单组件',
  description: '',
  icon: '',
  category: '',
  isUnique: false,
  isSuite: false,
  isContainer: false,
  setters: [
    {
      propName: 'label',
      setterName: 'Input',
      props: {
        label: '标题',
        subLabel: '最长支持20位',
        maxLength: 20,
        validateMessage: {
          required: '不能为空',
        },
      },
    },
  ],
  props: {
    label: "默认标题"
  },
}