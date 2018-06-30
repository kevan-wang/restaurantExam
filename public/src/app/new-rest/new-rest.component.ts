import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-rest',
  templateUrl: './new-rest.component.html',
  styleUrls: ['./new-rest.component.css']
})
export class NewRestComponent implements OnInit {

  newRestaurant;
  errorMessages = [];

  constructor(private _root: RootService, private _router: Router) { }

  ngOnInit() {
    this.newRestaurant = {
      name: null,
      cuisine: null
    }
  }

  register() {
    this.errorMessages = []
    this.validate()
    if(this.errorMessages.length == 0) {
      const obs = this._root.addRestaurant(this.newRestaurant)
      obs.subscribe(
        data => {
          if(!data["errors"]) {
            this._router.navigate(['/restaurants']);
          }
          else{
            let keys = Object.keys(data["errors"])
            for(let key of keys) {
              this.errorMessages.push(data["errors"][key]["message"])
            }
          }
        },
        err => { 
          console.log(err) 
        },
        () => {
        }
      )
    }
  }

  validate() {
    this.errorMessages = []
    if(this.newRestaurant.name == null || this.newRestaurant.name == "") {
      this.errorMessages.push("Please enter the name for this restaurant.")
    }
    else if(this.newRestaurant.name.length < 3) {
      this.errorMessages.push("Name length must be at least 3")
    }
    if(this.newRestaurant.cuisine == null || this.newRestaurant.cuisine == "") {
      this.errorMessages.push("Please enter the cuisine type for this restaurant.")
    }
    else if(this.newRestaurant.name.length < 3) {
      this.errorMessages.push("Cuisine length must be at least 3")
    }
  }

}




