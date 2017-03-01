import { Component } from "@angular/core";
import { getName } from "i18n-iso-countries";

import { Country, Continent } from "../../../../../app/models/index";
import { ChildCountryComponent } from "./child-country.component";

@Component({
    moduleId: module.id,
    selector: "app-parent",
    templateUrl: "./countries-list.component.html"
})
export class CountriesListComponent {
    countries: Country[] = [
        new Country("gb", getName("gb", "en"), new Continent("Europe")),
        new Country("es", getName("es", "en"), new Continent("Europe")),
        new Country("fr", getName("fr", "en"), new Continent("Europe"))
    ];
}