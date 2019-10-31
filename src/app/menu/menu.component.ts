import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { collService } from '../college/coll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() sidebarclick = new EventEmitter();

   visibleSidebar1;

  constructor(private _data:collService) { }

  ngOnInit() {
  }

  onLogOut(){
    this._data.logout();
  }
  isLoggedIn(){
    return this._data.isLoggedIn;
  }
  onclick(){
    this.sidebarclick.emit();
  }



}
