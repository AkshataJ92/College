import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { HttpClientModule } from "@angular/common/http";
import { routing } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactComponent } from "./contact/contact.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from "@angular/material/grid-list";
import { CollegeComponent } from "./college/college.component";
import { NgxPaginationModule } from "ngx-pagination";
import { SidebarModule } from "primeng/sidebar";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ReversePipe } from "./reverse.pipe";
import { IdPipe } from "./id.pipe";

import { DataTableModule } from "ng-angular8-datatable";
import { PrimedataComponent } from "./primedata/primedata.component";
import { MessageService} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { DatatableComponent } from './datatable/datatable.component';
import { DialogModule } from 'primeng/primeng';
import { DatacComponent } from './datac/datac.component';
import { LoginComponent } from './login/login.component';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import { TranslateModule } from '@ngx-translate/core';
import { LanguageTranslationModule } from './translation.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CollegeComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    SidebarComponent,
    ReversePipe,
    IdPipe,
    PrimedataComponent,
    DatatableComponent,
    DatacComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    NgxPaginationModule,
    SidebarModule,
    DataTableModule,
    TableModule,
    ToastModule,
    ContextMenuModule,
    ChartModule,
    DialogModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    TranslateModule,
    LanguageTranslationModule
  ],
  providers: [ MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
