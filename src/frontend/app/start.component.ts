import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux, IAppState, select }    from './store/index';
import { GlobalActions } from './actions/index';

@Component({
    selector: 'start',
    styles: ['h1 { margin-bottom: 300px; }'],
    template: `
            <h1>Start</h1>
            <p>Globalstate: {{ globalState$ | async | json }}</p>
            <p><button type="button" (click)="globalActions.setPending(true)">Set pending true</button></p>
            `
})
export class StartComponent implements OnInit {

    //public globalState$: Observable<any>;
    @select('globalState') globalState$;

    constructor(
      //  private store: NgRedux<IAppState>,
        public globalActions: GlobalActions) { }

    ngOnInit() {
    //    this.globalState$ = this.store.select('globalState');
    }
}
