const RestaurantController = require("../controllers/mainController.ctrl")

module.exports = function (app) {
    app.get('/api/restaurants', RestaurantController.retrieveAllRestaurants)
    app.get('/api/restaurants/:id', RestaurantController.retrieveOneRestaurant)
    app.post('/api/restaurants', RestaurantController.createRestaurant)
    app.put('/api/restaurants/:id', RestaurantController.updateRestaurant)
    app.delete('/api/restaurants/:id', RestaurantController.destroyRestaurant)

    app.post('/api/review/:restID', RestaurantController.postReview)
    app.get('/api/review/:restID', RestaurantController.getRestaurantReviews)
    // any additional routes and their coincident functions
}

