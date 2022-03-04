import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Customers } from "../models/app.models";

@Injectable()
export class ApiService{
    constructor(private http: HttpClient){}
    getCustomers(): Observable<Customers[]>{
        return this.http.get<Customers[]>('http://localhost:5002/customer-list').pipe(map(res => res));
    }
}