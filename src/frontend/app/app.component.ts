import { Component, OnInit }                    from '@angular/core';
import { Router }                       from '@angular/router';

// Redux imports
import { NgReduxRouter }                from 'ng2-redux-router';
import { NgRedux, DevToolsExtension, select }   from 'ng2-redux';
import { IAppState, rootReducer,
         enhancers, middleware,
         enableBatching }               from './store';


@Component({
    selector: 'app',
    templateUrl:'app.html'
})

export class AppComponent implements OnInit  {

    public menu: Object[] = [
        { name: 'Forms', icon: 'assignment ind', link: '/forms'},
        { name: 'Buttons', icon: 'assignment ind', link: '/buttons'},
        { name: 'Icons', icon: 'assignment ind', link: '/icons' },
        { name: 'Grid', icon: 'assignment ind', link: '/grid'},
        { name: 'Lists', icon: 'assignment ind', link: '/lists'},
        { name: 'Tabs', icon: 'assignment ind', link: '/tabs'},
        { name: 'Sliders', icon: 'assignment ind', link: '/sliders'},
        { name: 'Spinners', icon: 'assignment ind', link: '/spinners'}
    ];

    constructor(
        private router: Router,
        private ngRedux: NgRedux<IAppState>,
        private ngReduxRouter: NgReduxRouter,
        private devTool: DevToolsExtension) {}


    public ngOnInit() {

        // Configure store
        this.ngRedux.configureStore(
           enableBatching(rootReducer),
           {},
           middleware,
           [ ...enhancers, this.devTool.isEnabled() && ENV !=='production' ? this.devTool.enhancer() : f => f]
        );
        this.ngReduxRouter.initialize();
    }

    public navigate( link: string) {
        this.router.navigate([link]);
        return false;
    }
}
