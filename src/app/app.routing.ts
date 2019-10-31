import { Routes,RouterModule } from "@angular/router";
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { CollegeComponent } from './college/college.component';
import { HomeComponent } from './home/home.component';
import { PrimedataComponent } from './primedata/primedata.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DatacComponent } from './datac/datac.component';
import { LoginComponent } from './login/login.component';
import { GaurdserviceService } from './gaurdservice.service';

const arr : Routes=[
  {path:'', component:LoginComponent},
  {path:'home', canActivate:[GaurdserviceService], component:HomeComponent},
  {path:'college', canActivate:[GaurdserviceService],component:CollegeComponent},
  {path:'aboutus', canActivate:[GaurdserviceService], component:AboutusComponent},
  {path:'contact',canActivate:[GaurdserviceService], component:ContactComponent},
  {path:'data', canActivate:[GaurdserviceService],component:PrimedataComponent},
  {path:'datatable', canActivate:[GaurdserviceService],component:DatatableComponent},
  {path:'datac', canActivate:[GaurdserviceService],component:DatacComponent}

];

export const routing=RouterModule.forRoot(arr);
