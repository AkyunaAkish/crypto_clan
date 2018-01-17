import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import sideNavReducer from '../components/Shared/reducers/sideNav';
import dimensionsReducer from '../components/Shared/reducers/dimensions';
import coinsReducer from '../components/Shared/reducers/coins';
import membersReducer from '../components/Shared/reducers/members';

const rootReducer = combineReducers({
  form: formReducer,
  sideNav: sideNavReducer,
  dimensions: dimensionsReducer,
  coins: coinsReducer,
  members: membersReducer
});

export default rootReducer;