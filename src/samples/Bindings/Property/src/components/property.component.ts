import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "property-binding",
    templateUrl: "./property.component.html",
    styleUrls: ["./property.component.css"],
})
export class PropertyComponent {
    public unitedKingdomFlag: string;
    public usaFlag: string;
    public imageWidth: number;
    public imageHeight: number;
    public unitedKingdomTitle: string;
    public usaTitle: string;
    public backgroundToggle: boolean;
    public cssToggle: boolean;
    public centerDisplay: string;
    public dimensionsFull: string;

    constructor() {
        this.unitedKingdomFlag = "http://flagpedia.net/data/flags/normal/gb.png";
        this.usaFlag = "http://flagpedia.net/data/flags/normal/us.png";
        this.imageWidth = 250;
        this.imageHeight = 150;
        this.unitedKingdomTitle = "United Kingdom";
        this.usaTitle = "United States of America";
        this.backgroundToggle = false;
        this.cssToggle = true;
        this.centerDisplay = "0 auto";
        this.dimensionsFull = "100% 100%";
    }
}