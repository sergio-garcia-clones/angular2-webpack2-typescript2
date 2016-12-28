// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/forms';
import '@angular/router';

// RxJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';


// Angular2 Material
import '@angular/material';
import '@angular/material/core/theming/prebuilt/deeppurple-amber.css';

// Styles
import '../sass/index.scss';
//import '@angular2-material/core/overlay/overlay.css';

// Redux
import { NgReduxRouter }  from 'ng2-redux-router';
import { NgRedux, select } from 'ng2-redux';


// Hammer.js - needed by some of the Material modules
import 'hammerjs/hammer.js';

if ( ENV === 'production') {
  // Production


} else {
  // Development

}