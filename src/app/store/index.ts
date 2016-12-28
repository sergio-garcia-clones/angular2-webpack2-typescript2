import { NgRedux, select }      from 'ng2-redux';
import { IAppState }    from './types';
import { rootReducer }  from './reducers';

const createLogger  = require( 'redux-logger');
import { batchActions, enableBatching } from './redux-batched-actions';

let middleware = [
];

/*
if( ENV !== 'production') {
    middleware.push(

     createLogger({
            level: 'info',
            collapsed: true
        })
    );
}
*/


const enhancers = [
];

export {
    select,
    middleware,
    rootReducer,
    enhancers,
    NgRedux,
    IAppState,
    batchActions,
    enableBatching
};


