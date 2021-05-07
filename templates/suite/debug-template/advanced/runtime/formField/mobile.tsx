import FormField from '../../../src/runtime/FormField/mobile';
import createReactClass from 'create-react-class';

const Field = createReactClass({
  mixins: [FormField],
  componentWillMount() {
    this.fieldWillMount && this.fieldWillMount();
  },
  componentDidMount() {
    this.fieldDidMount && this.fieldDidMount();
  },
  componentDidUpdate() {
    this.fieldDidUpdate && this.fieldDidUpdate();
  },
  render() {
    if (this.fieldRender) {
      return this.fieldRender();
    }

    return null;
  },
});

export default Field;
