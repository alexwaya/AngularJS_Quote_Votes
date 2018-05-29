import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
	users:any[];

  constructor(public dataService:DataService) { 

  	this.dataService.getUsers().subscribe(users => {
  		//console.log(users);
  		this.users = users;
  	})

  }

  onDeleteClick(id){
    this.dataService.deleteUser(id).subscribe(res => {
      for(let i = 0; i < this.users.length; i++){
        if(this.users[i].id == id){
          this.users.splice(i,1);
        }
      }
    });
  }

  ngOnInit() {
  }

}
