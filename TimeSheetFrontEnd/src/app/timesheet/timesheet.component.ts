import { DOCUMENT, Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';
import { Resource } from '../model/resource';
import { TimeSheet } from '../model/time-sheet';
import { TotalSum } from '../model/total-sum';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  constructor(private common: CommonserviceService, public locations:Location,private router1:Router,private router:ActivatedRoute, @Inject(DOCUMENT) public _document: Document) { }
  resourceList: Resource[];
  timesheet:TimeSheet[];
  timess:TimeSheet;
  re:Resource;
  
  num:number;
  mon:string;
  count:number=0;
  ngOnInit() {
    this.router.paramMap.subscribe(param1=>{
      this.common.getdataByMonth(param1.get('id')).subscribe(data=>{
       this.timesheet=data})
      });
      this.router.paramMap.subscribe(param1=>{
        this.common.getsumbymonth(param1.get('id')).subscribe(data=>{
         this.num=data})
        });


  this.router.paramMap.subscribe(param1=>{this.mon=param1.get('id')});
  }
  getdata() {
   
    window.location.reload();
 
  }
 
 getback()
{
  
 this.locations.back();
   
}

navigatetoupdate(n:number)
{
 
this.router1.navigate(['update',n]);

}
adddata()
{
  this.router1.navigate(['newdata']);
}
navigatetomonth()
{
  this.router1.navigate(['month']);
}

}