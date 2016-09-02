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


@NgModule({

     imports: [
        BrowserModule,
        SharedModule.forRoot(),
        ExamplesModule.forRoot(),
        routing
    ],

    declarations: [
        AppComponent,
        StartComponent
    ],

     providers: [
         routingProviders
     ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}