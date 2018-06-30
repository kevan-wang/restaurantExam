import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-rest',
  templateUrl: './edit-rest.component.html',
  styleUrls: ['./edit-rest.component.css']
})
export class EditRestComponent implements OnInit {

  restaurant;
  errorMessages = [];

  constructor(private _root: RootService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        const obs1 = this._root.retrieveOneRestaurant(params.id)
        obs1.subscribe(
          data => {
            this.restaurant = data[0]
            console.log(this.restaurant)
          }
        )
    })
  }

  update() {
    this.errorMessages = []
    this.validate()
    if(this.errorMessages.length == 0) {
      const obs = this._root.editRestaurant(this.restaurant._id, this.restaurant)
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
    if(this.restaurant.name == null || this.restaurant.name == "") {
      this.errorMessages.push("Please enter the name for this restaurant.")
    }
    else if(this.restaurant.name.length < 3) {
      this.errorMessages.push("Name length must be at least 3")
    }
    if(this.restaurant.cuisine == null || this.restaurant.cuisine == "") {
      this.errorMessages.push("Please enter the cuisine type for this restaurant.")
    }
    else if(this.restaurant.name.length < 3) {
      this.errorMessages.push("Cuisine length must be at least 3")
    }
  }

}
