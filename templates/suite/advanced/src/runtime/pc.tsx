import find from 'lodash/find';
import get from 'lodash/get';
import './pc.less';

const SwapDemoSuite = {
  suiteDidMount() {
    const { form } = this.props;
    const hiddenReason = form.getSuiteProp('hiddenReason');
    const leaveTypeExtendValue = form.getFieldExtendValue('leaveType');
    const leaveReasonField = form.getFieldInstance('leaveReason');

    if (hiddenReason) {
      leaveReasonField.hide();
    }

    if (leaveTypeExtendValue?.key === 'option_1') {
      leaveReasonField.hide();
    }

    this.formDataLinkagehandler();
    this.asyncSetFieldProps();
  },

  // 关联选项
  formDataLinkagehandler() {
    const { form } = this.props;
    const leaveTypeField = form.getFieldInstance('leaveType');
    const leaveReasonField = form.getFieldInstance('leaveReason');

    leaveTypeField.onExtendValueChange(option => {
      if (option.key === 'option_2') {
        leaveReasonField.show();
      } else {
        leaveReasonField.hide();
      }
    });
  },

  // 动态获取业务数据
  asyncSetFieldProps() {
    const { form, spi } = this.props;
    const leaveTypeField = form.getFieldInstance('leaveType');
    const leaveReasonField = form.getFieldInstance('leaveReason');
    const value = leaveTypeField.getValue();
    const extendValue = leaveTypeField.getExtendValue();
    const key = leaveTypeField.getProp('id');
    const bizAsyncData = [
      {
        key,
        bizAlias: 'leaveType',
        extendValue,
        value,
      },
    ];

    spi
      .refreshData({
        modifiedBizAlias: ['leaveReason'], // spi接口要改动的是leaveReason的属性值
        bizAsyncData,
      })
      .then(res => {
        const leaveReasonData = find(
          res.dataList,
          item => item.bizAlias === 'leaveReason',
        );
        const show = get(leaveReasonData, 'props.invisible');
        if (show) {
          leaveReasonField.show();
        } else {
          leaveReasonField.hide();
        }
      });
  },
};

export default SwapDemoSuite;
