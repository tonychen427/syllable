
import Immutable from 'immutable';

const initState = Immutable.Map({
  data: [],
  nextOffset: 0,
});

function bingImages(state = initState, actions) {
  switch (actions.type) {
    case 'LOAD_DATA':
      return state.withMutations(mutableState => mutableState
        .set('data', actions.payload.data)
        .set('nextOffset', actions.payload.nextOffset));
    default:
      return state;
  }
}

export default bingImages;
