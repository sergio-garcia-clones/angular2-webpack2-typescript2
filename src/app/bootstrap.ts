import { enableProdMode }               from '@angular/core';
import { platformBrowserDynamic }       from '@angular/platform-browser-dynamic';
import { AppModule }                    from './app.module';

function  main(): any {

    return platformBrowserDynamic().bootstrapModule(AppModule)

    .then( (ref) => {
        let app = ref.instance;
        console.log('Application has bootstrapped in development mode');
    })
    .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);



