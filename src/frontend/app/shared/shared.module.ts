// Modules
import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }                       from '@angular/common';
import { FormsModule,
         ReactiveFormsModule }                from '@angular/forms';
import { HttpModule, Http }                   from '@angular/http';
import { RouterModule }                       from '@angular/router';
import { MdModule }                           from './md.module';


@NgModule({

  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule.forRoot()
  ],

  declarations: [
  ],

  exports: [
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MdModule
  ]
})

export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule

    };
  }
}
