import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit, Input } from "@angular/core";
import { IShip } from "src/Interfaces/IShip";
import { IShipsList } from "src/Interfaces/IShipsList";
import { ShipService } from "src/services/ship.service";

@Component({
    selector: 'ship',
    providers: [ShipService],
    templateUrl: 'ship.component.html',
    styleUrls: ['./ship.component.css']
})
export class ShipsComponent {
    constructor(private shipService: ShipService) { }

    // ships!: IShipsList;
    @Input() ship!: IShip;


    // ngOnInit(): void {
    //     this.shipService.getShipsByPage(1)
    //         .subscribe(result => this.ships = result as IShipsList);

    // }

    // getShips(pageNumber: number) {
    //     this.shipService.getShipsByPage(pageNumber)
    //         .subscribe(result => this.ships = result as IShipsList);
    // }

    // getCurrentShip(shipUrl: string) {
    //     this.shipService.getShipByUrl(shipUrl)
    //         .subscribe(result => {this.ship = result as IShip; console.log(result)});
    // }


}





