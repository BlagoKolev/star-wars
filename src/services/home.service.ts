import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Url } from "../constants/url";
import { HomeDto } from "src/modelsDto/homeDto";

@Injectable()
export class HomeService {
    constructor(private httpClient: HttpClient, private url: Url) { }
    
    getData() {
       return this.httpClient.get<HomeDto>(this.url.base);   
    }
}
