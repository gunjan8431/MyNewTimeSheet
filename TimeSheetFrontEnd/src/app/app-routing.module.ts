import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MonthComponent } from './month/month.component';
import { NewdataComponent } from './newdata/newdata.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { UpdateTimeSheetComponent } from './update-time-sheet/update-time-sheet.component';
const routes: Routes = [
  { path :'' , redirectTo: 'month' , pathMatch:'full' },
  { 
    path: 'month', component:MonthComponent,
  },

  { 
    path: 'contact', component:ContactComponent,
  },
  { 

    path: 'newdata', component:NewdataComponent,
  },
{ 
  path: 'home/:id', component:TimesheetComponent
},
{
  path:'update/:id',component:UpdateTimeSheetComponent
  
},

{
  path:'**',component:PageNotFoundComponent
}

];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    enableTracing: false
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
