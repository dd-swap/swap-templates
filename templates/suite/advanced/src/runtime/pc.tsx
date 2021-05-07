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

    if (leaveTypeExtendValue.key === 'option_1') {
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

  // 动态设置表单属性
  asyncSetFieldProps() {
    const { form, spi } = this.props;
    const bizType = form.getSuiteProp('bizType');
    const corpId = window.__corpid;
    const userId = (window.__user__ || {}).workNo;
    const leaveReasonField = form.getFieldInstance('leaveReason');
    const leaveTypeField = form.getFieldInstance('leaveType');
    const value = leaveTypeField.getValue();
    const extendValue = leaveTypeField.getExtendValue();
    const bizAsyncData = [
      {
        bizAlias: 'leaveType',
        extendValue,
        value,
      },
    ];

    // 发请求
    spi
      .refreshData({
        bizType,
        corpId,
        userId,
        bizAsyncData,
      })
      .then(res => {
        const leaveReasonData = find(
          res.dataList,
          item => item.bizAlias === 'leaveReason',
        );
        const show = get(leaveReasonData, 'props.show');
        if (show) {
          leaveReasonField.show();
        } else {
          leaveReasonField.hide();
        }
      });
  },
};

export default SwapDemoSuite;
