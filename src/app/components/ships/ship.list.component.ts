import { Component, Input } from '@angular/core';

@Component({
    selector: 'ship-list',
    templateUrl: './ship.list.component.html',
    styleUrls: ['./ship.list.component.html']
})
export class ShipListComponent {
    @Input() ships: [] = [];
 

}