const User = require('../models/User');

module.exports = {
    async createUser(req, res) {
        try {
            const { name, username, email, phone, website } = req.body;
            const user = await User.create({ name, username, email, phone, website });
            return res.status(201).json(user);
        } catch (err) {
            return res.status(500).json("Unable to register User.");
        }
    }
}
 
