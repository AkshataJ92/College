import { Component, OnInit } from '@angular/core';
import { colldetail } from '../college/college';
import { collService } from '../college/coll.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  displayDialog: boolean;

  arr: colldetail[];

  cols: any[];

  //car: colldetail = {};

  newCar: boolean;

  constructor(private _data: collService) { }

  ngOnInit() {
      this._data.getAllColleges().subscribe(
        (data:colldetail[])=>
        {
         this.arr=data
        }

      );

      this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'description', header: 'Address' },
    ];
  }
}
