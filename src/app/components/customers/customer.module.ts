import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from "./customers.component";

@NgModule({
    imports:[CustomerRoutingModule, CommonModule],
    declarations: [CustomerListComponent, CustomerDetailsComponent, CustomersComponent]
})
export class CustomerModule{

}