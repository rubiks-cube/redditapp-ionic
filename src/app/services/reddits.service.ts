    import { Injectable } from '@angular/core';
     
    import 'rxjs/Rx';
    import { Http } from '@angular/http';
     
     
    @Injectable()
    export class RedditsService {
       

       
       baseUrl:String;


      constructor(private http:Http) {
      this.baseUrl='https://www.reddit.com/r'
       }
     
      getPosts(category,limit) {

      return  this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
      .map(res=>res.json());
      }
    }