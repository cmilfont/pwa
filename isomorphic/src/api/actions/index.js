import { createAction } from 'redux-actions';
import * as constants from '../constants';

export const saveUserData = createAction(constants.SAVE_USER_DATA);
export const clearUserData = createAction(constants.CLEAR_USER_DATA);
export const loginAnonymous = createAction(constants.LOGIN_ANONYMOUS);
export const loginUser = createAction(constants.LOGIN_USER);
export const logoutUser = createAction(constants.LOGOUT_USER);
export const subscribePushNotification = createAction(constants.SUBSCRIBE_PUSH_NOTIFICATION);
export const unsubscribePushNotification = createAction(constants.UNSUBSCRIBE_PUSH_NOTIFICATION);
export const setPushNotificationSubscriptionStatus = createAction(constants.SET_PUSH_NOTIFICATION_SUBSCRIPTION_STATUS);