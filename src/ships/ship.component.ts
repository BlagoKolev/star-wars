import { Component } from "@angular/core";
// import { IShip } from "src/Interfaces/IShip";
import { ShipService } from "src/services/ship.service";

@Component({
    selector: 'ships',
    providers: [ShipService],
    templateUrl: 'ship.component.html',
    styleUrls: ['./ship.component.css']
})
export class ShipsComponent {
    constructor(private shipService: ShipService) { }

    ships: any;

    getShips(list: number) {
        this.shipService.getShipsByPage(list)
            .subscribe(res => this.ships = res)
    }
}