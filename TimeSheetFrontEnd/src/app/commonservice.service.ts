import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from './model/resource';
import { TimeSheet } from './model/time-sheet';
import { TotalSum } from './model/total-sum';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  // url:string="http://localhost:8901/get";
  // url2:string="http://localhost:8901/gettotal";
  // url3:string="http://localhost:8901/update";
  // url4:string="http://localhost:8901/singeldata";
  // url5:string="http://localhost:8901/getsum";
  // url6:string="http://localhost:8901/getByMonth";
  // url7:string="http://localhost:8901/getsumBymonth";

 
  url3:string="http://localhost:8900/update";
  url4:string="http://localhost:8900/getsingledata";
  
  url6:string="http://localhost:8900/getbymonth";
  url7:string="http://localhost:8900/getsum";
  url8:string="http://localhost:8900/post"
  constructor(private http:HttpClient) { }
  
  
    
  
  
// getdata():Observable<Resource[]>
// {
//    return this.http.get<Resource[]>(this.url);
//  }
//  getsumdata():Observable<TotalSum[]>
// {
//    return this.http.get<TotalSum[]>(this.url2);
//  }
 
//  updatedata(emp:Resource)
//  {
//    return this.http.put<Resource>(this.url3+"/"+emp.resourseId,emp);
//  }
//  getsingledata(n:number):Observable<Resource>
//  {
//    return this.http.get<Resource>(this.url4+"/"+n);
//  }
// gettotal()
// {
//   return this.http.get<number>(this.url5);
// }
// getdataByMonth(n:string):Observable<Resource[]>
// {
//   return this.http.get<Resource[]>(this.url6+"/"+n)
// }
// getsumbymonth(n:string):Observable<number>
//   {
//     return this.http.get<number>(this.url7+"/"+n);
//   }
// ////////////******************************** */



 
 updatedata(emp:TimeSheet)
 {
   return this.http.put<TimeSheet>(this.url3+"/"+emp.timeSheetId,emp);
 }
 getsingledata(n:number):Observable<TimeSheet>
 {
   return this.http.get<TimeSheet>(this.url4+"/"+n);
 }

getdataByMonth(n:string):Observable<TimeSheet[]>
{
  return this.http.get<TimeSheet[]>(this.url6+"/"+n)
}
getsumbymonth(n:string):Observable<number>
  {
    return this.http.get<number>(this.url7+"/"+n);
  }

  postdata(res:Resource)
  {
    return this.http.post<Resource>(this.url8,res)
    
  }


}
