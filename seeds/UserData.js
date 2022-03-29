const { User } = require('../models');

const userdata = [
    {
        username: 'happy',
        password: '123456',
    }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;