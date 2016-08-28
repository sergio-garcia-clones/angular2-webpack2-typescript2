/* This module is an example how you can package all services and components 
   from Angular2-Material into one Angular2 module, which you can import in other modules
*/
import { NgModule, ModuleWithProviders }      from '@angular/core';

import {
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    PanelModule,
    TabViewModule
} from 'primeng/primeng';

@NgModule({
  exports: [
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    PanelModule,
    TabViewModule
  ]
})

export class PrimengModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PrimengModule
    };
  }
}

