import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';
import { Resource } from '../model/resource';
import { TimeSheet } from '../model/time-sheet';
import { MonthComponent } from '../month/month.component';

@Component({
  selector: 'app-newdata',
  templateUrl: './newdata.component.html',
  styleUrls: ['./newdata.component.css']
})
export class NewdataComponent implements OnInit {
  constructor(public fb:FormBuilder,public common:CommonserviceService,public route :Router,public router:ActivatedRoute) { }
n:number;
y:string;
  ngOnInit(): void {
  }
  tes:Resource={

    resourceId:0,
    resourceName:'',
    team:'',
    timesheet:[{
      timeSheetId:0,
      month:'',
        year:2022,
      week1:0,
     week2:0,
       week3:0,
       week4:0,
       week5:0,
     total:0,
     resource:{
      resourceId:0,
        resourceName:'',
        team:'',
        timesheet:[]

  }
  }]

  }

  submitdata(res:Resource)
{

  for(let e of res.timesheet)
  {
    this.y=e.month;
    this.n=e.year;
  }



  if(res.resourceId!=0&&this.y!=""&&res.resourceName!=""&&res.team!="")
  {
  this.common.postdata(res).subscribe();
  alert("saving data")
  res.timesheet.forEach(element => {
    this.route.navigate(['home',element.month]).then(() => {
      window.location.reload()
      })
});

  }
  else{
    alert("null value For ID, Name ,Team , Month,Year Not Allowed")
  }

}
navigatetomonth()
{
  this.route.navigate(['month']);
}


}

