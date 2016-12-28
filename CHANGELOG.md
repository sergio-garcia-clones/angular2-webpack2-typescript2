# Changelog
2016.12.28
V0.0.14<br>
* Use yarn instead of npm for faster dependency installation
* Added src/sw.js for extra service worker events
* [Bugfix] Make sure app is reloaded on serviceworker changes

2016.10.28
V0.0.12<br>
* Added lazy loading to the Examples module
* AoT build with lazy loading bootstraps insanely fast now

2016.10.25
V0.0.11<br>
* Upgrade to Angular 2.1
* Added AoT compiling (npm run aot or npm run build-aot)

2016.10.19
V0.0.10<br>
* Upgraded to Angular 2.0.2
* Added Ng2-Redux

2016.09.30<br>
V0.0.9<br>
* Upgraded to Angular/Material 9-3
* Upgraded to Angular 2.0.1


2016.09.20<br>
V0.0.8<br>
* Added AoT compilation.
* Bumped Angular-Material to Alpha 8-2


Be aware of small bugs in Ng-Material.
If you get errors in the Material module, check out this issue I made in the Material Github repo (and it's resolution).
I expect this issue to be fixed in the next Material build.

https://github.com/angular/material2/issues/1279

About AoT compilation:
The "npm run build" command first compiles the application into the "compiled/" folder.<br>
Webpack production configuration uses this build instead of your source-code. <bR>
This way Webpack will use the compiled application.<br>
You can start a compilation manually by issuing "npm run aot"

