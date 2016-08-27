// Angular2 Material Design Module
import { NgModule, ModuleWithProviders }      from '@angular/core';
import { Routes, RouterModule }               from '@angular/router';
import { SharedModule }                       from 'shared/shared.module';

// Components and pipes
import { ButtonsComponent }                   from './buttons/buttons.component';
import { FormsComponent }                     from './forms/forms.component';
import { ListsComponent }                     from './lists/lists.component';
import { IconsComponent }                     from './icons/icons.component';
import { TabsComponent }                      from './tabs/tabs.component';
import { SlidersComponent }                   from './sliders/sliders.component';
import { SpinnersComponent }                  from './spinners/spinners.component';



// Setup routing
const routes: Routes  = [
     { path: 'buttons',     component: ButtonsComponent },
     { path: 'forms',       component: FormsComponent },
     { path: 'icons',       component: IconsComponent },
     { path: 'lists',       component: ListsComponent },
     { path: 'tabs',        component: TabsComponent },
     { path: 'sliders',     component: SlidersComponent},
     { path: 'spinners',    component: SpinnersComponent}
];


@NgModule({

  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],

  declarations: [
    ButtonsComponent,
    FormsComponent,
    IconsComponent,
    ListsComponent,
    TabsComponent,
    SlidersComponent,
    SpinnersComponent
  ]
})

export class ExamplesModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExamplesModule
    };
  }
}

