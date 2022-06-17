import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTimeSheetComponent } from './update-time-sheet/update-time-sheet.component';
import { MonthComponent } from './month/month.component';
import { NewdataComponent } from './newdata/newdata.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    UpdateTimeSheetComponent,
    MonthComponent,
    NewdataComponent,
    PageNotFoundComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,FormsModule
  ],
  exports:[
    TimesheetComponent,UpdateTimeSheetComponent,MonthComponent,NewdataComponent,PageNotFoundComponent,ContactComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
