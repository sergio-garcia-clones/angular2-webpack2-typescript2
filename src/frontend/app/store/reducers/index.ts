import { combineReducers }      from 'redux';
import { IAppState }            from '../types';
import { globalReducer }        from './global.reducer';
import { routerReducer }        from 'ng2-redux-router';

export const rootReducer = combineReducers<IAppState>({
    globalState:    globalReducer,
    router:         routerReducer
});
