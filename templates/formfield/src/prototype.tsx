import i18next from './i18next';

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
        subLabel: i18next.t('swap_editor_input_most_number', {
          value1: 20,
        }),
        maxLength: 20,
        validateMessage: {
          required: i18next.t('oa_approval_the_title_can_not_be_blank'),
        },
      },
    },
  ],
  props: {
    label: "默认标题"
  },
}