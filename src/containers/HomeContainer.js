import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/Home';
import * as artsActions from '../actions/artsActions';

function mapStateToProps(state) {
  return {
    arts: state.arts.allIds,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    artsActions: bindActionCreators(artsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
