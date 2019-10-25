import * as types from '../constants/actionTypes';

export const closeDrawer = () => ({ type: types.CLOSE_DRAWER });
export const toggleDrawer = () => ({ type: types.TOGGLE_DRAWER });
export const setMobile = (isMobile) => ({ type: types.SET_MOBILE, isMobile: isMobile });
