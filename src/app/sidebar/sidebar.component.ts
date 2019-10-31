import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  visibleSidebar1;

  constructor(private translate:TranslateService) { }

  ngOnInit() {
  }

  onClickSidebar(){
    this.visibleSidebar1=true;
  }

  close(){
    this.visibleSidebar1=false;
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
}
