import { Injectable } from '@angular/core';
import { customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class NewcustomersService {

  customersList = customers;

  allCustomers(){
    return this.customersList;
  }

  deleteCustomer(custId){
    var confirmation = confirm("Do you want to delet this customer?");
    if(confirmation == true){
      this.customersList.splice(custId,1);
    }
  }

  addCustomer(data){
    this.customersList.push(data);
    alert("A New Customer is Added");
  }

  editCustomer(custId, eCust){
    this.customersList[custId].id = eCust.id;
    this.customersList[custId].fname = eCust.fname;
    this.customersList[custId].lname = eCust.lname;
    this.customersList[custId].designation = eCust.designation;
    this.customersList[custId].email = eCust.email;
    this.customersList[custId].mobileno = eCust.mobileno;
    this.customersList[custId].address = eCust.address;

    alert("Details are Updated");
  }

  constructor() { 

  }
}
