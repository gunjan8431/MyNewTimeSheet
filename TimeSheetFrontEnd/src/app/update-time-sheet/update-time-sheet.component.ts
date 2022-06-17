import { DOCUMENT, Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';
import { Resource } from '../model/resource';
import { TimeSheet } from '../model/time-sheet';
import { TimesheetComponent } from '../timesheet/timesheet.component';

@Component({
  selector: 'app-update-time-sheet',
  templateUrl: './update-time-sheet.component.html',
  styleUrls: ['./update-time-sheet.component.css']
})
export class UpdateTimeSheetComponent implements OnInit {

  res: Resource
  tes: TimeSheet
  resObj: any
  v: string
  mon: any
  _document: any;

  constructor(private fb: FormBuilder, public common: CommonserviceService, private location: Location, private route: ActivatedRoute, public router: Router) {
  }

  ngOnInit(): void {


    this.route.paramMap.subscribe(param1 => {
      this.common.getsingledata(parseInt(param1.get('id'))).subscribe(data => {
        this.tes = data
      })
    });
    this.route.paramMap.subscribe(param1 => {
      this.v = param1.get('id')
    });
    this.v = this.mon;


  }

goBack()
{
  this.location.back();

}

submitdata(reso:TimeSheet)

{

  if(reso.resource.resourceId!=0&&reso.month!=""&&reso.resource.resourceName!=""&&reso.resource.team!="")
  {
  this.common.updatedata(reso).subscribe();

  alert("updating data")
  this.router.navigate(['home',reso.month]).then(() => {
       window.location.reload();
      });
 // this.location.back();
    }
    else{
      alert("null data not allowed")
    }

}
navigatetomonth()
{
  this.router.navigate(['month']);
}


}
