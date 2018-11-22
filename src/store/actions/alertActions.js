import { ALERT_OK, ALERT_ERROR } from './types';

export const alertOk = (res) => (dispatch) => {
   dispatch({
     type: ALERT_OK,
     res
   })
};

export const alertError = (res) => (dispatch) => {
  dispatch({
    type: ALERT_ERROR,
    res
  })
};
