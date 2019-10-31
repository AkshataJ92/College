import { Component, OnInit } from '@angular/core';
import { colldetail } from '../college/college';
import { MenuItem, MessageService, Message, ConfirmationService } from 'primeng/api';
import { collService } from '../college/coll.service';

@Component({
  selector: 'app-primedata',
  templateUrl: './primedata.component.html',
  styleUrls: ['./primedata.component.css']
})
export class PrimedataComponent implements OnInit {

  display: boolean = false;
  display1: boolean = false;
  arr: colldetail[]=[];
  cols: any[];
  selectedCar: colldetail;
  item: colldetail;
  id:number;
  selectCars: colldetail[];
  items: MenuItem[];
  collid:number;
  collegename:string;
  department:string;
  msgs: Message[] = [];

  constructor(private _data: collService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this._data.getAllColleges().subscribe(
      (data:colldetail[])=>
      {
       this.arr=data
      }

    );

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Address' }
  ];

    this.items = [
      { label: 'View', icon: 'pi pi-search', command: (event) => this.viewCar(this.selectedCar) },
      // { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteCar(this.selectedCar) },
      { label: 'Delete', icon: 'pi pi-times', command: (click:any) => this.delete(this.selectedCar) },
      { label: 'Edit', icon: 'pi pi-times', command: (click:any) => this.edit(this.selectedCar) }
  ];
  }

viewCar(car: colldetail) {
    this.messageService.add({ severity: 'info', summary: 'College Selected', detail: car.name + ' - ' + car.description });
}

// deleteCar(car: colldetail) {
//     let index = -1;
//     for (let i = 0; i < this.arr.length; i++) {
//         if (this.arr[i].name == car.name) {
//             index = i;
//             break;
//         }
//     }
//     this.arr.splice(index, 1);

//     this.messageService.add({ severity: 'info', summary: 'Car Deleted', detail: car.name + ' - ' + car.description });
// }

delete(car: colldetail){
  this.confirmationService.confirm({
    message: 'Do you want to delete this record?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    accept: () => {

        let index = -1;
        for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].name == car.name) {
            index = i;
            break;
        }
    }
        this.arr.splice(index, 1);

        this.messageService.add({ severity: 'info', summary: 'Deleted', detail: car.name + ' - ' + car.description });
    },
    reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
    }
});
}

edit(item){
  this.display=true;
  this.collid=item.id;
  this.collegename=item.name;
  this.department=item.description;
}

cancel(){
  this.display=false;
}

UpdateCollege(f1){
  var req={
    id:f1.value.id,
    name:f1.value.name,
    description:f1.value.description
  }
  this._data.addcollege(req).subscribe((data:any) => {
    this._data.getAllColleges().subscribe(
      (data:colldetail[])=>
      {
       this.arr=data
      }

    );
    alert("record edited");
  });
}


}
