import { Injectable }       from '@angular/core';
import { NgRedux }          from 'ng2-redux';
import { IAppState }        from 'store/types';
import { GLOBAL_PENDING }   from '../store/constants';

@Injectable()
export class GlobalActions {

    constructor (private ngRedux: NgRedux<IAppState>) {}

    public setPending = (isPending: boolean) => {

        return this.ngRedux.dispatch({
            type: GLOBAL_PENDING,
            payload: isPending
        });
    };
}
