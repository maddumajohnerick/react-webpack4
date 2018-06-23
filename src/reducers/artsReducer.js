export default function artsReducer(
  state = {},
  action,
) {
  const artObj = {};
  switch (action.type) {
    case 'FIND_ARTS_SUCCESS':
      return Object.assign({}, state, { byIds: Object.assign({}, action.arts.byIds, state.byIds), allIds: action.arts.allIds });

    case 'EDIT_ART_SUCCESS': {
      console.log(action.art)
      artObj[action.art._id] = action.art;
      return Object.assign({}, state, {
        byIds: Object.assign({}, state.byIds, artObj),
      });
    }

    default:
      return state;
  }
}
