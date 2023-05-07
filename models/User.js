const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String, 
    email: String,
    createdAt: String
})

//We could say on each one required, but were using GraphQL so we can handle that on the GraphQL layer instead of here 

module.exports = model('User', userSchema);