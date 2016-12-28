import { GLOBAL_PENDING }   from '../constants';
import { IGlobalState }     from '../types';

const INITIAL_STATE: IGlobalState =  {
    pending: false
};

export function globalReducer(state: IGlobalState = INITIAL_STATE, action: any): Object {

    switch (action.type) {

        case GLOBAL_PENDING:
            return Object.assign( {}, state, { pending: action.payload });

        default:
            return state;
    }
}
