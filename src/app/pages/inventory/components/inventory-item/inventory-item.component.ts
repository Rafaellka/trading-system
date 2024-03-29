import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {InventoryItemModel} from "../../data/models/inventory-item.model";

@Component({
    selector: 'inventory-item',
    templateUrl: './inventory-item.component.html',
    styleUrls: ['./styles/inventory-item.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryItemComponent {
    @Input()
    public model: InventoryItemModel;
}