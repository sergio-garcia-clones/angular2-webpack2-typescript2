import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'grid',
    template: `

    <md-card>
        <md-card-title>Grid</md-card-title>
    </md-card>

    <md-grid-list cols="4" rowHeight="100px">
        <md-grid-tile *ngFor="let tile of tiles"
            [colspan]="tile.cols"
            [rowspan]="tile.rows"
            [style.background]="tile.color">
            {{tile.text}}
        </md-grid-tile>
    </md-grid-list>
    `
})
export class GridComponent  {

    public  tiles: Object[] = [
        {text: 'Lars', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Sasha', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Flemming', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Patrick', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
    constructor() { }
}