const { Blogpost } = require('../models');

const blogpostdata = [
    {
        user_id: 1,
        blogpost_id: 1,
        title: 'Web Development',
        contents: 'A web developer is a programmer or a coder who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model.',
    }
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostdata);

module.exports = seedBlogpost;