import { Component, OnInit } from '@angular/core';
import { colldetail } from '../college/college';
import { collService } from '../college/coll.service';
import { Coll } from '../coll';

@Component({
  selector: 'app-datac',
  templateUrl: './datac.component.html',
  styleUrls: ['./datac.component.css']
})
export class DatacComponent implements OnInit {

  displayDialog: boolean;

    car: Coll = {};

    selectedCar: Coll;

    newCar: boolean;

    arr: Coll[];

    cols: any[];

    constructor(private _data: collService) { }

    ngOnInit() {
      this._data.getAllColleges().subscribe(
        (data:Coll[])=>
        {
         this.arr=data
        }

      );

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'description', header: 'Address' }
            // { field: 'brand', header: 'Brand' },
            // { field: 'color', header: 'Color' }
        ];
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = {};
        this.displayDialog = true;
    }

    save() {
        let cars = [...this.arr];
        if (this.newCar)
            cars.push(this.car);
        else
            cars[this.arr.indexOf(this.selectedCar)] = this.car;

        this.arr = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        let index = this.arr.indexOf(this.selectedCar);
        this.arr = this.arr.filter((val, i) => i != index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Coll): Coll {
        let car = {};
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

}
