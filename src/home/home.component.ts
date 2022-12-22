import { Component, OnInit } from "@angular/core";
import { IHome } from "src/Interfaces/IHome";
import { HomeService } from "src/services/home.service";

@Component({
    selector: 'home',
    providers: [HomeService],
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private homeService: HomeService) { }

    data: any;

    ngOnInit(): IHome {
        this.homeService.getData()
            .subscribe(res => this.data = res)

        return this.data;
    }
}