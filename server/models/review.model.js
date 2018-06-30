// =============== DB MODEL ===============

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurantExam')
const ReviewSchema = new mongoose.Schema({
    restaurantID: {
        type: String
    },
    name: { 
        type: String, 
        required: [true, "Reviews must have a name!"], 
        minlength: [3, "Reviewer names must be at least 3 characters long."]  
    },
    comment: { 
        type: String, 
        required: [true, "Reviews must have a comment!"], 
        minlength: [3, "Review comments must be at least 3 characters long."]  
    },
    stars: { 
        type: Number, 
        required: [true, "Reviews must have a star rating!"], 
        min: [1, "Reviews must be given 1-5 stars"], 
        max: [5, "Reviews must be given 1-5 stars"] },
    },  { timestamps: true }
);
mongoose.model('Review', ReviewSchema)

