import { Component, OnInit } from '@angular/core';
import { IShip } from 'src/Interfaces/IShip';
import { IShipsList } from 'src/Interfaces/IShipsList';
import { ShipService } from 'src/services/ship.service';

@Component({
    selector: 'ship-list',
    templateUrl: './ship.list.component.html',
    styleUrls: ['./ship.list.component.css'],
    providers: [ShipService]
})
export class ShipListComponent implements OnInit {
    constructor(private shipService: ShipService) { }

    ships!: IShipsList;
    ship!: IShip;


    ngOnInit(): void {
        this.shipService.getShipsByPage(1)
            .subscribe(result => this.ships = result as IShipsList);

    }

    getShips(pageNumber: number) {
        this.shipService.getShipsByPage(pageNumber)
            .subscribe(result => this.ships = result as IShipsList);
    }

    getCurrentShip(shipUrl: string) {
        this.shipService.getShipByUrl(shipUrl)
            .subscribe(result => { this.ship = result as IShip; console.log(result) });
    }


}