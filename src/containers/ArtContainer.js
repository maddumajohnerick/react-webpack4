import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Art from '../components/Art';
import * as artsActions from '../actions/artsActions';

function mapStateToProps(state, ownProps) {
  return {
    art: state.arts.byIds[ownProps._id],
    liked: state.arts.byIds[ownProps._id].liked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    artsActions: bindActionCreators(artsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Art);
