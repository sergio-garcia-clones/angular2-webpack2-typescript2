import { NgModule }                             from '@angular/core';
import { BrowserModule  }                       from '@angular/platform-browser';


// Application modules
import { SharedModule }                         from './shared/shared.module';
import { ExamplesModule }                       from './examples/examples.module';

// App level component
import { AppComponent }                         from './app.component';
import { StartComponent }                       from './start.component';

// Top level routing
import { routing, routingProviders }            from './app.routes';

// Redux

import { NgReduxModule, NgRedux,
         DevToolsExtension }                    from 'ng2-redux';
import { NgReduxRouter }                        from 'ng2-redux-router';
import { ACTION_PROVIDERS }                     from './actions';
import { IAppState, rootReducer,
         enhancers, middleware,
         enableBatching }                       from './store';


let providers = [
 routingProviders,
 NgReduxRouter,
 DevToolsExtension,
 ACTION_PROVIDERS
];

@NgModule({

     imports: [
        BrowserModule,
        NgReduxModule.forRoot(),
        SharedModule.forRoot(),
        ExamplesModule.forRoot(),
        routing
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