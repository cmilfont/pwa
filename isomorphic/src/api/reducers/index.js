import { handleActions } from 'redux-actions';
import * as constants from '../constants';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const defaultState = {
  router: {
    locationBeforeTransitions: null,
  },
  user: {},
  myPosition: {
    latitude: -15,
    longitude: -45,
  },
  offline: false,
};

export default (state = fromJS(defaultState), action) => {
  switch (action.type) {
    case constants.OFFLINE_VERIFIED:
      return state.set('offline', action.payload);
    case LOCATION_CHANGE:
      return state.setIn(['router', 'locationBeforeTransitions'], action.payload);
    case constants.MY_POSITION:
      return state.set('myPosition', fromJS(action.payload));
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