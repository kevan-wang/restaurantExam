import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-rest',
  templateUrl: './all-rest.component.html',
  styleUrls: ['./all-rest.component.css']
})
export class AllRestComponent implements OnInit {

  allRestaurants;
  loadTime;

  constructor(private _root: RootService, private _router: Router) { }

  ngOnInit() {
    const observable = this._root.retrieveRestaurants()
    observable.subscribe( 
      data => { 
        this.allRestaurants = data
      },  // Function that runs upon success
      err => { console.log(err) },                // Funtion that runs upon error 
      () => {}                                    // Additional function that runs upon success
    );
    this.loadTime = new Date()  
  }

  delete(id) {
    const observable = this._root.deleteRestaurant(id)
    observable.subscribe( 
      data => { 
        for(var i = 0; i < this.allRestaurants.length; i++) {
          if(this.allRestaurants[i]._id == id) {
            this.allRestaurants.splice(i, 1)
            break
          }
        }    
      },  // Function that runs upon success
      err => { console.log(err) },                // Funtion that runs upon error 
      () => { 
      }                                    // Additional function that runs upon success
    );
  }

  checkTime(dateStr) {
    var createdDate = Date.parse(dateStr)
    var diff = this.loadTime - createdDate
    return diff < 30000
  }
}
