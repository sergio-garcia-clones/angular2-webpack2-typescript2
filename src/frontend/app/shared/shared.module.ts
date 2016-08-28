// Modules
import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }                       from '@angular/common';
import { FormsModule,
         ReactiveFormsModule }                from '@angular/forms';
import { HttpModule, Http }                   from '@angular/http';
import { RouterModule }                       from '@angular/router';
import { PrimengModule }                               from './primeng.module';


@NgModule({

  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],

  declarations: [
  ],

  exports: [
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PrimengModule
  ]
})

export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}
