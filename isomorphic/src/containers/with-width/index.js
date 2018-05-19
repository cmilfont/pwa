import { connect } from 'react-redux';
import withWidth from 'material-ui/utils/withWidth';
import { getInitialWidth } from '../../api/reducers';

const mapStateToProps = state => ({
  initialWidth: getInitialWidth(state),
});

export default (options) => (BaseComponent) => {
  const widthComponentFactory = withWidth(options);
  const injectProps = connect(mapStateToProps);
  return injectProps(widthComponentFactory(BaseComponent));
}
