import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) { 

  }

  getUsers(){
  	return this.http.get('https://jsonplaceholder.typicode.com/users')
  		.pipe(map(res => res.json()));
  			
  }


  addUser(user){
  	return this.http.post('https://jsonplaceholder.typicode.com/users', user)
  		.pipe(map(res => res.json()));
  }


  deleteUser(id){
  	return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id)
  		.pipe(map(res => res.json()));
  			
  }

}
