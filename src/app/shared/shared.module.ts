// Modules
import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }                       from '@angular/common';
import { FormsModule,
         ReactiveFormsModule }                from '@angular/forms';
import { RouterModule }                       from '@angular/router';
import { MaterialModule }                     from '@angular/material';


@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot()
  ],

  declarations: [
  ],

  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ]
})

export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule

    };
  }
}
