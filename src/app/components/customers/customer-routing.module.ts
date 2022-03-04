import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomersComponent } from "./customers.component";

const routes: Routes = [
    { 
        path: 'customers', 
        component: CustomersComponent,
        children: [
            {
                path: 'list', component: CustomerListComponent
            },
            {
                path: 'details', component: CustomerDetailsComponent
            }
        ] 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomerRoutingModule{}




  