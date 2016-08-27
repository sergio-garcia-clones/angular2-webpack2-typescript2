// Angular2 Material Design Module
import { NgModule, ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }               from '@angular/router';
import { SharedModule }                       from 'shared/shared.module';

// Components and pipes
import { TestComponent }                   from './test/test.component';

// Setup routing
const routes: Routes  = [
     { path: 'test',     component: TestComponent }
];

@NgModule({

  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],

  declarations: [
    TestComponent
  ]
})

export class ExamplesModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExamplesModule
    };
  }
}

