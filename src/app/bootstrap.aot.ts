import { enableProdMode }       from '@angular/core';
import { platformBrowser }      from '@angular/platform-browser';
import { AppModuleNgFactory }   from '../../compiled/src/app/app.module.ngfactory';

const runtime = require('offline-plugin/runtime');

let swInstallObj = {

    onUpdateReady: () => {
        runtime.applyUpdate();
        console.log('Updating to new version');
    },
    onUpdated: () => {
        console.log('Sw has been updated to latest version');
        window.location.reload();
    },
    onUpdating: () => {
        
    }

};


enableProdMode();

console.log('Bootstrapping AoT mode...');

function main(): any {
    return platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
        .then( ref => {
            let app = ref.instance;
            runtime.install(swInstallObj);
        })
        .catch(err => console.error(err));
}
 
document.addEventListener('DOMContentLoaded', main);