// Require styling
import 'primeui/themes/omega/theme.css';
import '../sass/font-awesome/font-awesome.scss';
import 'primeui/primeui-ng-all.min.css';

import '../sass/index.scss';

import '@angular2-material/core/overlay/overlay.css';

import { enableProdMode }               from '@angular/core';
import { platformBrowserDynamic }       from '@angular/platform-browser-dynamic';
import { AppModule }                    from './app.module';

if ( ENV === 'production') {
    enableProdMode();
}

function  main(): any {

     if ( ENV !== 'production') {
        return platformBrowserDynamic().bootstrapModule(AppModule)

        .then( (ref) => {
            let app = ref.instance;
            console.log('Application has bootstrapped in development mode');
        })
        .catch(err => console.error(err));
     }

    if ( ENV === 'production') {
         return platformBrowserDynamic().bootstrapModule(AppModule)

         .then( (ref) => {
            let app = ref.instance;
            console.log('Application bootstrapped in production mode');
            require('offline-plugin/runtime').install();
        })
        .catch(err => console.error(err));
    }
}

document.addEventListener('DOMContentLoaded', main);



