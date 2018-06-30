// =============== DB MODEL ===============

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurantExam')
const RestaurantSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Restaurants must have a name!"], 
        minlength: [3, "Restaurant names must be at least 3 characters long."] 
    },
    cuisine: { 
        type: String, 
        required: [true, "Restaurants must have a cuisine type!"], 
        minlength: [3, "Cuisines must be at least 3 characters long."]
    },
    reviews: { 
        type: Array, 
        required: true, 
        default: [] 
    }},  { timestamps: true }
);
mongoose.model('Restaurant', RestaurantSchema)

