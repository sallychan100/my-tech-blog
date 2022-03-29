const { Comment } = require('../models');

const commentdata = [
    {
        user_id: 1,
        blogpost_id: 1,
        body: 'Thank you!',
    }
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;