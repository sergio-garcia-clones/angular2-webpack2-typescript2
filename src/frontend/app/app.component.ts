import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';

@Component({
    selector: 'app',
    template: require('./app.html')
})

export class AppComponent implements OnInit {


    constructor( private router: Router) {}

    ngOnInit() {}

    public navigate( link: string) {
        this.router.navigate([link]);
        return false;
    } 
}
