import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ArtView from '../components/ArtView';
import * as artsActions from '../actions/artsActions';

function mapStateToProps(state, ownProps) {
  const artId = ownProps.match.params.artId;
  console.log(ownProps)
  return {
    artId,
    art: state.arts.byIds ? state.arts.byIds[artId] || null : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    artsActions: bindActionCreators(artsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtView);
