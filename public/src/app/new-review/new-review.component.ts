import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  restaurant
  review
  errorMessages = []

  constructor(private _root: RootService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.review = {
      restaurantID: "",
      name: "",
      comment: "",
      stars: 5
    }
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

  submit() {
    this.review["restaurantID"] = this.restaurant._id
    console.log(this.review)
    this.validate()
    if(this.errorMessages.length == 0) {
      const obs = this._root.addReview(this.restaurant._id, this.review)
      obs.subscribe(
        data => {
          if(!data["errors"]) {
            this._router.navigate(['/restaurants/' + this.restaurant._id]);
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
    if(this.review.name == null || this.review.name == "") {
      this.errorMessages.push("Please enter the name of the reviewer.")
    }
    else if(this.review.name.length < 3) {
      this.errorMessages.push("Name length must be at least 3")
    }
    if(this.review.comment == null || this.review.comment == "") {
      this.errorMessages.push("Please enter a comment.")
    }
    else if(this.review.comment.length < 3) {
      this.errorMessages.push("Comment length must be at least 3")
    }
    if(this.review.stars > 5 || this.review.stars < 1) {
      this.errorMessages.push("Star rating must range from 1 to 5")
    }
  }

}











