const mongoose = require('mongoose')
const Restaurant = mongoose.model('Restaurant')
const Review = mongoose.model('Review')


//  Prepopulated with basic CRUD operations
module.exports = {
    retrieveAllRestaurants : function(request, response) {
        Restaurant.find({}, function(err, data) {
            if(err) {
                console.log("Error: ", err)
            } else {
                console.log("Success!")
                response.json(data)
            }
        })
    },

    retrieveOneRestaurant : function(request, response) {
        Restaurant.find({ _id: request.params.id }, function(err, data){
            if(err) {
                console.log("Error: ", err)
            } else{
                console.log("Success!")
                response.json(data)
            }
        })
    },

    createRestaurant : function(request, response) {
        var newRestaurant = new Restaurant({ 
            name: request.body.name,
            cuisine: request.body.cuisine,
        })
        newRestaurant.save(function(err) {
            if(err) {
                console.log("Error: ", err)
                for(errorName in err.errors) {  // console logs all the error messages
                    console.log(err.errors[errorName]["message"])
                }
                response.json(err)
            }
            else {
                console.log("Success!")
                response.json({message: "Success", data: "Added " + newRestaurant.name })    
            }
        })
    },

    updateRestaurant : function(request, response) {
        Restaurant.findOneAndUpdate({ _id: request.params.id },
            {$set: { 
                name: request.body.name,
                cuisine: request.body.cuisine,
            }},
            function(err, data) {
                if(err) {
                    console.log("Error: ", err)
                    for(errorName in err.errors) {  // console logs all the error messages
                        console.log(err.errors[errorName]["message"])
                    }
                    response.json(err)    
                } else {
                    console.log("Success!")
                    response.json({message: "Success", data: "Updated " + data.name })    
                }
            }
        )
    },

    destroyRestaurant : function(request, response) {
        Restaurant.deleteOne({ _id: request.params.id }, function(err, name) {
            if(err) {
                console.log("Error: ", err)
            } else {
                console.log("Success!")
                response.json({message: "Success", data: "Restaurant deleted." })    
            }
        });
    },

    postReview : function(request, response) {
        console.log("In postReview")
        var newReview = new Review({
            restaurantID: request.params.restID, 
            name: request.body.name,
            comment: request.body.comment,
            stars: request.body.stars
        })
        newReview.save(function(err) {
            if(err) {
                console.log("Error: ", err)
                for(errorName in err.errors) {  // console logs all the error messages
                    console.log(err.errors[errorName]["message"])
                }
                response.json(err)
            }
            else {
                console.log("Success!")
                response.json({message: "Success", data: "Added " + newReview.name })    
            }
        })
    },

    getRestaurantReviews : function(request, response) {
        Review.find({ restaurantID: request.params.restID }, function(err, data){
            if(err) {
                console.log("Error: ", err)
            } else{
                console.log("Success!")
                response.json(data)
            }
        })
    }

    // any other functions that will be linked to routes
}






