const { getSingleUser } = require('../../../Develop/server/controllers/user-controller');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            
        })
    }
}