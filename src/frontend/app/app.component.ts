import { Component, OnInit }            from '@angular/core';
import { Router }                       from '@angular/router';

@Component({
    selector: 'app',
    template: require('./app.html')
})

export class AppComponent implements OnInit {

  
    public menu: Object[] = [
        {
            name: 'Forms',
            icon: 'assignment ind',
            link: '/forms'
        },

        {
            name: 'Buttons',
            icon: 'assignment ind',
            link: '/buttons'
        },

          {
            name: 'Icons',
            icon: 'assignment ind',
            link: '/icons'
        },

        {
            name: 'Lists',
            icon: 'assignment ind',
            link: '/lists'
        },

         {
            name: 'Tabs',
            icon: 'assignment ind',
            link: '/tabs'
        },
         {
            name: 'Sliders',
            icon: 'assignment ind',
            link: '/sliders'
        },

           {
            name: 'Spinners',
            icon: 'assignment ind',
            link: '/spinners'
        }
    ];


    constructor( private router: Router) {}

    ngOnInit() {}

    public navigate( link: string) {
        this.router.navigate([link]);
        return false;
    } 
}
