const { model, Schema } = require('mongoose');

const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

//Created at default could be put here but we will do that on the GraphQL Side as well

module.exports = model('Post', postSchema);