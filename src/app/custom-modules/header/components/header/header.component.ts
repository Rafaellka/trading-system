import {Component, Input} from "@angular/core";
import {MenuController} from "@ionic/angular";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Input()
    public title: string;
    constructor(
        private _menuController: MenuController
    ) {}

    public openNavigation(): void {
        this._menuController.open('navigation');
    }

    public openProfile(): void {
        this._menuController.open('profile');
    }
}