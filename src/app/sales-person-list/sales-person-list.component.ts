import { Component, OnInit } from '@angular/core';
import { SalesPerson } from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("José", "Muñoz", "aaa@a", 50000),
    new SalesPerson("Luis", "Perez", "bbb@a", 40000),
    new SalesPerson("Lidia", "Lopez", "ccc@a", 90000),
    new SalesPerson("Maria", "Gutierrez", "ddd@a", 60000)
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
