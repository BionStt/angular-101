import {Component} from "@angular/core";
import { getAlpha2Codes } from "i18n-iso-countries";

@Component({
    moduleId: module.id,
    selector: "twoway-binding",
    templateUrl: "./twoWay.component.html",
    styleUrls: ["./twoWay.component.css"]
})
export class TwoWayComponent {
    url: string;

    constructor() {
        this.url = "http://flagpedia.net/data/flags/normal/$P0.png";
    }

    getFlagByCode(code: string) {
        return this.url.replace("$P0", code);
    }
}
