import { NgModule } from "@angular/core";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderRoutingModule } from "./order-routing.module";

@NgModule({
    declarations: [OrderListComponent],
    imports: [ OrderRoutingModule ]
})
export class OrderModule {}