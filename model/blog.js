// Creating a model for login page
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    number : {
        type : Number,
        required : true
    },
    emial : {
        type : String,
        required : false        
    },
}, {timestamps : true})

const Blog = mongoose.model('Blog' , blogSchema)

module.exports = Blog