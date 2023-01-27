import { IShip } from "./IShip";

export interface IShipsList {
    "count": number,
	"next": string,
	"previous": null,
	"results": IShip[]
}