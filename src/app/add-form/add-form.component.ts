import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NewcustomersService } from '../newcustomers.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  newCustForm;
  newId= new FormControl('',Validators.required);
  newfname= new FormControl('',Validators.required);
  newlname= new FormControl('',Validators.required);
  newdes= new FormControl('',Validators.required);
  newemail= new FormControl('',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]);
  newmobile= new FormControl('',[Validators.required, Validators.minLength(10)]);
  newaddress= new FormControl('',Validators.required);

  constructor(
    private newcust: FormBuilder,
    private addservices :NewcustomersService
  ) { 
        
    }

  ngOnInit():void {
    this.newCustForm = this.newcust.group({
    id: this.newId,
    fname: this.newfname,
    lname: this.newlname,
    designation : this.newdes,
    email: this.newemail,
    mobileno: this.newmobile,
    address: this.newaddress
  });
  }

  onSubmit(data) {
    this.addservices.addCustomer(data);
    this.newCustForm.reset();
    console.log(this.addservices.allCustomers);
  }

}