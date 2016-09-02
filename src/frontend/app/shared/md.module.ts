/* This module is an example how you can package all services and components
   from Angular2-Material into one Angular2 module, which you can import in other modules
*/
import { NgModule, ModuleWithProviders }      from '@angular/core';

import { MdButtonModule }                     from '@angular2-material/button';
import { MdButtonToggleModule }               from '@angular2-material/button-toggle';
import { MdCardModule }                       from '@angular2-material/card';
import { MdCheckboxModule }                   from '@angular2-material/checkbox';
import { MdGridListModule }                   from '@angular2-material/grid-list';
import { MdIconModule, MdIconRegistry }       from '@angular2-material/icon';
import { MdInputModule }                      from '@angular2-material/input';
import { MdListModule }                       from '@angular2-material/list';
import { MdMenuModule }                       from '@angular2-material/menu';
import { MdProgressBarModule }                from '@angular2-material/progress-bar';
import { MdProgressCircleModule }             from '@angular2-material/progress-circle';
import { MdRadioModule }                      from '@angular2-material/radio';
import { MdRippleModule }                     from '@angular2-material/core/ripple/ripple';
import { MdSidenavModule }                    from '@angular2-material/sidenav';
import { MdSliderModule }                     from '@angular2-material/slider';
import { MdSlideToggleModule }                from '@angular2-material/slide-toggle';
import { MdTabsModule }                       from '@angular2-material/tabs';
import { MdToolbarModule }                    from '@angular2-material/toolbar';
import { MdTooltipModule }                    from '@angular2-material/tooltip';
import { OverlayModule }                      from '@angular2-material/core/overlay/overlay-directives';
import { PortalModule }                       from '@angular2-material/core/portal/portal-directives';
import { RtlModule }                          from '@angular2-material/core/rtl/dir';
import { MdLiveAnnouncer }                    from '@angular2-material/core/a11y/live-announcer';


const MATERIAL_MODULES = [
 MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressCircleModule,
  MdRadioModule,
  MdRippleModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  RtlModule,

];


@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdInputModule,
    MdListModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRippleModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    PortalModule,
    RtlModule,

    // These modules include providers so I call the forRoot method on them
    MdButtonToggleModule.forRoot(),
    MdIconModule.forRoot(),
    MdMenuModule.forRoot(),
    MdRadioModule.forRoot(),
    MdTooltipModule.forRoot(),
    OverlayModule.forRoot(),
  ],
  exports: MATERIAL_MODULES,
  providers: [
    MdLiveAnnouncer
  ]
})

// This is the core module used by all except the root module
// I need this because each MdModule needs to return the .forRoot() method if called by root..
// Final version of Material should fix this, but for now I'll provide it like this
// It's a bit messy if you ask me but whatever.. :)
export class MaterialRootModule { }

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})


export class MdModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialRootModule,
      providers: [
        MdIconRegistry
      ]
    };
  }
}
