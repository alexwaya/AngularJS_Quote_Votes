import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

	users:any[];

	user = {
		name: '',
		quote: '',
		author: ''
	}

  constructor(public dataService:DataService) { }

   onSubmit(){
   	this.dataService.addUser(this.user).subscribe(user => {
   		console.log(user);
   		this.users.unshift(user);
   	})
   }

  ngOnInit() {
  }

}
