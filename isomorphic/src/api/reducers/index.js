import { handleActions } from 'redux-actions';
import * as constants from '../constants';
import { fromJS } from 'immutable';

const defaultState = {
  user: {},
  myPosition: {
    latitude: -15,
    longitude: -45,
  }
};

// export default handleActions(
//   {
//     [constants.SAVE_USER_DATA]: (state, action) => ({
//       ...state,
//       user: action.payload,
//     }),
//     [constants.CLEAR_USER_DATA]: (state, action) => ({
//       ...state,
//       user: {},
//     }),
//     [constants.SET_PUSH_NOTIFICATION_SUBSCRIPTION_STATUS]: (state, action) => ({
//       pushNotificationSubscriptionStatus: action.payload,
//     }),
//     [constants.MY_POSITION]: (state, action) => ({
//       ...state,
//       myPosition: action.payload
//     }),
//   },
//   defaultState,
// );

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case constants.SAVE_USER_DATA:
      return state.set('user', action.payload);
    case constants.CLEAR_USER_DATA:
      return state.set('user', action.payload);
    case constants.LOAD_PLACE_SUCCESS:
      return state.set('place', action.payload)
                  .set('myPosition', fromJS(action.payload.coords));
    default:
      return state;
  }
};


export const getInitialWidth = state => state.initialWidth || 'xs';
export const getUserData = state => state.user || {};
export const getPushNotificationSubscriptionStatus = state => state.pushNotificationSubscriptionStatus || false;