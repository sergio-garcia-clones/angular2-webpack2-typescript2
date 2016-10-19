import { NgModule }                             from '@angular/core';
import { BrowserModule  }                       from '@angular/platform-browser';
import { NgReduxModule }                        from 'ng2-redux';
import { NgReduxRouter }                        from 'ng2-redux-router';

// Application modules
import { SharedModule }                         from './shared/shared.module';
import { ExamplesModule }                       from './examples/examples.module';

// App level component
import { AppComponent }                         from './app.component';
import { StartComponent }                       from './start.component';
import { ACTION_PROVIDERS }                     from './actions';

// Top level routing
import { routing, routingProviders }            from './app.routes';


@NgModule({

     imports: [
        BrowserModule,
        NgReduxModule,
        SharedModule.forRoot(),
        ExamplesModule.forRoot(),

        routing
    ],

    declarations: [
        AppComponent,
        StartComponent
    ],

     providers: [
         routingProviders,
        NgReduxRouter,
        ACTION_PROVIDERS
     ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}