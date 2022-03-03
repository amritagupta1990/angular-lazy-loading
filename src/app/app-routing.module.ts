import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'customers',
    loadChildren: () => import('./components/customers/customer.module').then(x => x.CustomerModule)
  },
  {
    path: "orders",
    loadChildren: () => import('./components/orders/order.module').then(x => x.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
