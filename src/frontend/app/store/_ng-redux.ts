import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class _NgRedux extends NgRedux<any> {
    constructor(){
        super();
    }
}
