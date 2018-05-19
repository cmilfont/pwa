import { handleActions } from 'redux-actions';
import * as constants from '../constants';

const defaultState = {
  user: {},
  myPosition: {
    latitude: -15,
    longitude: -45,
  }
};

export default handleActions(
  {
    [constants.SAVE_USER_DATA]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    [constants.CLEAR_USER_DATA]: (state, action) => ({
      ...state,
      user: {},
    }),
    [constants.SET_PUSH_NOTIFICATION_SUBSCRIPTION_STATUS]: (state, action) => ({
      pushNotificationSubscriptionStatus: action.payload,
    }),
    [constants.MY_POSITION]: (state, action) => ({
      ...state,
      myPosition: action.payload
    }),
  },
  defaultState,
);

// export default (state = defaultState, action) => {
//   switch (action.type) {
//     case constants.SAVE_USER_DATA:
//       return {
//         ...state,
//         user: action.payload,
//       };

//     default:
//       return state;
//   }
// };

export const getInitialWidth = state => state.initialWidth || 'xs';
export const getUserData = state => state.user || {};
export const getPushNotificationSubscriptionStatus = state => state.pushNotificationSubscriptionStatus || false;