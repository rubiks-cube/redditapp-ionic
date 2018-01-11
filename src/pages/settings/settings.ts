import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import {RedditsPage} from  '../reddits/reddits';
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage  {

category:any;
limit:any;

  constructor(public navCtrl: NavController) {
this.getDefaults();
  }



setDefaults(){
	console.log(this.category);
	localStorage.setItem('category',this.category);
	localStorage.setItem('limit',this.limit);
	this.navCtrl.push(RedditsPage);
}





getDefaults(){
	if(localStorage.getItem('category')!=null){

		this.category=localStorage.getItem('category');
	}else{
	this.category='sports';
    }
    if(localStorage.getItem('limit')!=null){

		this.limit=localStorage.getItem('limit');
	}else{
	this.limit=10;
     }
}

  

}
