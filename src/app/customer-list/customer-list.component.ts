import { Component, OnInit } from '@angular/core';
import { NewcustomersService } from '../newcustomers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers;
  selectedCustomer;
  custId;
  
  constructor(
    private nc : NewcustomersService
  ) { }


  ngOnInit(): void {
    this.customers = this.nc.allCustomers();
  }
  
  show(customer){
    this.selectedCustomer = customer;
    this.custId= this.customers.indexOf(customer);
  }
}
