import { Component, OnInit } from '@angular/core';
import { collService } from './coll.service';
import { NgForm } from '@angular/forms';
import { colldetail } from './college';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  config: any;
  collection = [];

    college: colldetail[] = [];
    collid: number;
    collegename: string;
    department: string;
    id1: any;

  constructor(private _data: collService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.onGet();
    // setTimeout(()=>{
    //   this.onGet();
    // },3000);

    // this.id1=setInterval(()=>{
    //      console.log('executing');
    //      this.onGet();

    //    },3000);

  }

  ngOnDestroy() {
    if (this.id1) {
      clearInterval(this.id1);
    }
  }

  onGet(){
    this._data.getAllColleges().subscribe(
      (data:colldetail[])=>
      {
       this.college=data
      }

    );
  }

  onCollegeDelete(id:number)
  {
    this._data.deleteCollege(id).subscribe(
      (data:any)=>{

        this._data.getAllColleges().subscribe(
          (data:colldetail[])=>
          {
           this.college=data
          }

        );
      }
    );
  }

  onCollegeSave(f:NgForm)
  {
    this._data.addcollege(f.value).subscribe((data:any) => {
      this._data.getAllColleges().subscribe(
        (data:colldetail[])=>
        {
         this.college=data
        }

      );
      alert("College added");
    });
  }

  editCollegeget(item)
  {
     this.collid=item.id;
     this.collegename=item.name;
     this.department=item.description;
  }

  UpdateCollege(f1)
  {
      var req={
        id:f1.value.id,
        name:f1.value.name,
        description:f1.value.description
      }
      this._data.addcollege(req).subscribe((data:any) => {
        this._data.getAllColleges().subscribe(
          (data:colldetail[])=>
          {
           this.college=data
          }

        );
        alert("record edited");
      });
  }


}
