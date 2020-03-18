import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Input} from '@angular/core';
import { NewcustomersService } from '../newcustomers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customers;
  @Input() selectedCust;
  @Input() custId;

  constructor(
    private route: ActivatedRoute,
    private detailservices : NewcustomersService
  ) { }


  
delcust(custId){
    this.detailservices.deleteCustomer(custId);
  }
  
  ngOnInit(): void {
  }

}
