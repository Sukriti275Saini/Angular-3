import { Component, OnInit } from '@angular/core';
import { NewcustomersService } from '../newcustomers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  eCust;
  custId;
  
  constructor(
    private route: ActivatedRoute,
    private eCustomers : NewcustomersService
  ) { }

  onSubmit(custId, eCust){
    this.eCustomers.editCustomer(custId, eCust);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.eCust = this.eCustomers.allCustomers()[+params.get('custId')];
    });
  }

}
