import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerRoutingModule } from "./customer-routing.module";

@NgModule({
    imports:[CustomerRoutingModule, CommonModule],
    declarations: [CustomerListComponent]
})
export class CustomerModule{

}