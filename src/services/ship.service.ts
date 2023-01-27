import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from '../constants/url';


@Injectable()
export class ShipService {
    constructor(public httpClient: HttpClient, private url: Url) { }

    address: string = '';

    getShipsByPage(page: number) {
        switch (page) {
            case 1: this.address = this.url.shipsFirstPage; break;
            case 2: this.address = this.url.shipsSecondPage; break;
            case 3: this.address = this.url.shipsThirdPage; break;
            case 4: this.address = this.url.shipsFourthPage; break;
            default: this.address = this.url.shipsFirstPage; break;
        }
        return this.httpClient.get(this.address);
    }

    getShipByUrl(url: string) {
        return this.httpClient.get(url);
    }
}