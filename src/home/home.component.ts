import { Component, OnInit } from "@angular/core";
import { HomeDto } from "src/modelsDto/homeDto";
import { HomeService } from "src/services/home.service";

@Component({
    selector: 'home',
    providers: [HomeService],
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private homeService: HomeService) { }

    data:any;

    ngOnInit(): HomeDto {
        this.homeService.getData()
        .subscribe(res => this.data = res)
       
        return this.data;
    }
}