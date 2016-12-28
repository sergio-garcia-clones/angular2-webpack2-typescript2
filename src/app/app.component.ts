import { Component, OnInit }                    from '@angular/core';
import { Router }                       from '@angular/router';
import { NgReduxRouter }                from 'ng2-redux-router';


@Component({
    selector: 'app',
    templateUrl:'app.html'
})

export class AppComponent implements OnInit  {

    public menu: Object[] = [
        { name: 'Forms', icon: 'assignment ind', link: '/examples/forms'},
        { name: 'Buttons', icon: 'assignment ind', link: '/examples/buttons'},
        { name: 'Icons', icon: 'assignment ind', link: '/examples/icons' },
        { name: 'Grid', icon: 'assignment ind', link: '/examples/grid'},
        { name: 'Lists', icon: 'assignment ind', link: '/examples/lists'},
        { name: 'Tabs', icon: 'assignment ind', link: '/examples/tabs'},
        { name: 'Sliders', icon: 'assignment ind', link: '/examples/sliders'},
        { name: 'Spinners', icon: 'assignment ind', link: '/examples/spinners'}
    ];

    constructor(
        private router: Router,
        private ngReduxRouter: NgReduxRouter
       ) {}

    public ngOnInit() {
       this.ngReduxRouter.initialize();
    }

    public navigate( link: string) {
        this.router.navigate([link]);
        return false;
    }
}
