import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app-footer",
    templateUrl: "./footer.component.html",
})
export class FooterComponent {
    public gravatarUrl: string;
    public twitterHandle: string;
    public githubUrl: string;

    constructor() {
        this.gravatarUrl = "https://s.gravatar.com/avatar/750fb2d20360d5a472ef76cfc2037342?s=80";
        this.twitterHandle = "//twitter.com/giorgosdyrra";
        this.githubUrl = "https://ghbtns.com/github-btn.html?user=gdyrrahitis&type=follow&count=true&size=medium";
    }
}