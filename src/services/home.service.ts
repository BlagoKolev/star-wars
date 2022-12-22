import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Url } from "../constants/url";
import { IHome } from "src/Interfaces/IHome";

@Injectable()
export class HomeService {
    constructor(private httpClient: HttpClient, private url: Url) { }
    
    getData() {
       return this.httpClient.get<IHome>(this.url.base);   
    }
}
