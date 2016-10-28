import { NgModule }                             from '@angular/core';
import { BrowserModule  }                       from '@angular/platform-browser';
import { Routes, RouterModule }                 from '@angular/router';
import { HttpModule, Http }                     from '@angular/http';


// Application modules
import { SharedModule }                         from './shared/shared.module';
import { ExamplesModule }                       from './examples/examples.module';

// App level component
import { AppComponent }                         from './app.component';
import { StartComponent }                       from './start.component';


// Redux
import { NgReduxModule, NgRedux,
         DevToolsExtension }                    from 'ng2-redux';
import { _NgRedux }                             from './store/_ng-redux';
import { NgReduxRouter }                        from 'ng2-redux-router';
import { ACTION_PROVIDERS }                     from './actions';
import { IAppState, rootReducer,
         enhancers, middleware,
         enableBatching }                       from './store';


// Top level routing
const appRoutes: Routes = [
     { path: '', component: StartComponent },
     { path: 'examples',  loadChildren: './examples/examples.module#ExamplesModule' }
];

// Providers
let providers = [
{ provide: NgRedux, useClass: _NgRedux },
 NgReduxRouter,
 DevToolsExtension,
 ACTION_PROVIDERS
];

@NgModule({

     imports: [
        BrowserModule,
        HttpModule,
        NgReduxModule.forRoot(),
        SharedModule.forRoot(),
        ExamplesModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],

    declarations: [
        AppComponent,
        StartComponent
    ],

    providers: providers,
    bootstrap:    [ AppComponent ]
})
export class AppModule {

   constructor(
       ngRedux: NgRedux<IAppState>,
        devTool: DevToolsExtension
       ) {

        ngRedux.configureStore(
           enableBatching(rootReducer),
           {},
           middleware,
            [ ...enhancers, devTool.isEnabled() && ENV !=='production' ? devTool.enhancer() : f => f]
        );

  }
}