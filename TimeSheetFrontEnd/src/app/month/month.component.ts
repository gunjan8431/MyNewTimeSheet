import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  m1:string='may'
  constructor(public common:CommonserviceService,private location:Location,private route:Router,private router :ActivatedRoute) { }

  ngOnInit(): void {

  }

  navigatetonewdata()
  {

    this.route.navigate(['newdata'])
  }
navigatetoupdate(n:string)
{
 // alert(n)
this.route.navigate(['home',n])
}
}
