import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  title: string = "JK"
  name: string = "Jefferey Frankin"
  email: string = "jefferey123@gmail.com"
  contactNumber: string = "415 555 - 2671"
  address: string = "Howard Street Oswege NY"
  customerStatus: string = "active"

  constructor() { }

  ngOnInit(): void {
  }

}
