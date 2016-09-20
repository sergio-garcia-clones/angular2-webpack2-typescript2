import { enableProdMode }       from '@angular/core';
import { platformBrowser }      from '@angular/platform-browser';
import { AppModuleNgFactory }   from '../../../compiled/src/frontend/app/app.module.ngfactory';

if ( ENV === 'production') {
    enableProdMode();
}


platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    .then( (ref) => {
        let app = ref.instance;
        console.log('ENV: ', ENV);
        console.log('Application bootstrapped in AoT mode');     
        
        if( ENV === 'production') {
            require('offline-plugin/runtime').install();
            console.log('ServiceWorker installed');
        }
    })
    .catch(err => console.error(err));