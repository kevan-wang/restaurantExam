import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-rest',
  templateUrl: './show-rest.component.html',
  styleUrls: ['./show-rest.component.css']
})
export class ShowRestComponent implements OnInit {

  restaurant
  allReviews

  constructor(private _root: RootService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        const obs1 = this._root.retrieveOneRestaurant(params.id)
        obs1.subscribe(
          data => {
            this.restaurant = data[0]
          }
        )
        const obs2 = this._root.retrieveReviews(params.id)
        obs2.subscribe(
          data => {
            this.allReviews = data
            console.log(data)
            this.sortReviews()
          }
        )
    })
  }

  sortReviews() {
    var sortedReviews = []
    for(var i = 5; i > 0; i--) {
      for(var j = 0; j < this.allReviews.length; j++) {
        if(this.allReviews[j].stars == i) {
          sortedReviews.push(this.allReviews[j])
        }
      }
    }
    this.allReviews = sortedReviews
  }

}



