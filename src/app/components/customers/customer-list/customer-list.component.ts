import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/models/app.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer_list: Customers[] = [];
  constructor( private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getCustomers().subscribe({
      next: (data: Customers[]) => {
       this.customer_list = data;
      },
      error: error => {
        // handle error
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }

}
