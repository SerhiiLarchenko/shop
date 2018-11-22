import { ALERT_ERROR, ALERT_OK } from '../actions/types';

const initState = { status: true };

export default function (state = initState, action) {

  switch (action.type) {

    case ALERT_ERROR: 
      return { 
        status: false,
        info: 'something has gone wrong' 
      };
    
    case ALERT_OK:
      const { data } = action.res;
      const info = (typeof data === 'string' && data) 
        || 'thanks for your order';
      return { status: true, info };

    default:
      return state;
  } 
}