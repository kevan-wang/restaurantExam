import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RootService {

  constructor(private _http: HttpClient) { }

  retrieveRestaurants() {
    return this._http.get('/api/restaurants')
  }

  addRestaurant(newRestaurant) {
    return this._http.post('/api/restaurants', newRestaurant)
  }

  retrieveOneRestaurant(id) {
    return this._http.get('/api/restaurants/' + id)
  }

  editRestaurant(id, restaurant) {
    return this._http.put('/api/restaurants/' + id, restaurant)
  }

  deleteRestaurant(id) {
    return this._http.delete('/api/restaurants/' + id)
  }

  retrieveReviews(id) {
    return this._http.get('/api/review/' + id)
  }

  addReview(id, review) {
    return this._http.post('/api/review/' + id, review)
  }

}
