import i18next from '../utils/i18next';

// 完整配置见 https://yuque.antfin-inc.com/xqefkb/xmic60/twvhuo

/**
 * 主要字段说明：
 * 1. 套件props下必须有bizType，用来标识套件的唯一性，比如：tj.crm.payment（公司.业务.套件功能）
 * 2. bizAlias字段的描述一般给服务端当做系统字段使用
 * 3. isSuite: true， 是否是套件
 * 4. isUnique: true, 是否在表单中唯一
 * 5. category: 'basic'(基础组件) | 'suite_hr'（人事套件）| 'suite_attendance'(出勤套件)
 */

export default [
  {
    componentName: 'TestField',
    name: '测试组件',
    description: '',
    icon: 'logo_input2',
    setters: [
      {
        propName: 'bizAlias',
        setterName: 'Input',
        props: {
          label: 'bizAlias',
        },
      },
      {
        propName: 'label',
        setterName: 'Input',
        props: {
          label: '单行输入框',
          maxLength: 20,
        },
      },
      {
        propName: 'placeholder',
        setterName: 'Input',
        props: {
          label: '请输入',
          maxLength: 50,
        },
      },

      {
        propName: 'required',
        setterName: 'Switch',
        props: {
          label: '必填',
        },
      },
      {
        propName: 'notPrint',
        setterName: 'Switch',
        props: {
          label: '参与打印',
          dataSource: ['1', '0'],
          defaultValue: '0',
        },
      },
    ],
    props: {
      label: '单行输入框',
      placeholder: '请输入',
      required: false,
    },
  },
  {
    isUnique: true,
    isSuite: true,
    componentName: 'DDBizSuite',
    name: '测试套件',
    description: '',
    icon: '',
    category: '',
    setters: [
      {
        propName: '',
        setterName: 'TestSetter',
        props: {},
      },
      {
        propName: 'label',
        setterName: 'Input',
        props: {
          label: i18next.t('oa_approval_title_colon'),
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
      bizType: 'test.test', // 套件业务唯一标识 需要审批同学协助约定
      bizAlias: 'test', // 需要审批同学协助约定
      extract: true, // 固定属性 无需修改
    },
    children: [
      {
        componentName: 'InnerContactField',
        props: {
          bizAlias: 'applicant', // children中每个组件需要加入bizAlias 业务方自行确定用于数据解析
          placeholder: '请选择申请人',
          label: '申请人',
          disabled: true,
        },
      },
      {
        componentName: 'TextareaField',
        props: {
          bizAlias: 'reason', // children中每个组件需要加入bizAlias 业务方自行确定用于数据解析
          placeholder: '请输入申请理由',
          label: '申请理由',
        },
      },
    ],
  },
];
